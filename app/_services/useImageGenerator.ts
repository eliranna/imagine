import { useState, useEffect, useCallback } from 'react';
import { useChat } from 'ai/react';

export interface ImageGeneratorOptions {
  style: string;
}

export interface GenerateResponse {    
    success: boolean;
    messageId: string;
    createdAt: string;
}

export interface ImageData {
  uri?: string;
  progress?: number;
  buttons?: Button[];
}

export type Button = string
export type ResultType = 'draft' | 'final'

export interface UseImageGeneratorReturn {
  messageId: string; 
  image: string;
  resultType: ResultType | null;
  isAllowed: boolean | null;
  generate: (prompt: string, options?: ImageGeneratorOptions) => void;
  progress: number | null;
  scale: any;
  variate: any;
  setImage: any;
  setResultType: any;
  setMessageId: any;
}

function useImageGenerator(): UseImageGeneratorReturn {

  const [isAllowed, setAllowed] = useState<boolean | null>(null)
  const [messageId, setMessageId] = useState<string>('')
  const [image, setImage] = useState<string>('');
  const [resultType, setResultType] = useState<ResultType | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const {messages, isLoading, append, setMessages} = useChat()

  const [originalPrompt, setOriginalPrompt] = useState<string | null>()
  const [prompt, setPrompt] = useState<string | null>(null)
  const [options, setOptions] = useState<ImageGeneratorOptions | null>(null)

  useEffect(() => {
    console.log('translatePrompt...', originalPrompt)
    originalPrompt && translatePrompt(originalPrompt)
  }, [originalPrompt])

  const translatePrompt = (prompt: string) => {
    console.log('translate this...', prompt)
    append({
      role: 'user',
      content: `translate the following to English, DO NOT write anything else except the translation result: ${prompt}`
    })
  }

  useEffect(() => {
    !prompt && !isLoading && messages && messages.length > 0 && setPrompt(messages[messages.length-1].content)
  }, [messages, isLoading])

  useEffect(() => {
    prompt && append({
      role: 'user',
      content: `
        Is the following Midjourney prompt is suitable for underage children? 
        Answer "YES" only if the prompt will not produce an image that is inappropriate for children. For example, anything related to violence, nudity, pornography, or sexism is forbidden.
        If yes, respond ONLY with "YES"; otherwise, respond ONLY with "NO": ${prompt}
      `
    })
  }, [prompt])

  useEffect(() => {
    if (prompt && !isLoading && messages && messages.length > 0) {
      const resopnse = messages[messages.length-1].content
      console.log('legal response from GPT is', resopnse)
      if (resopnse == "YES") {
        setAllowed(true)
      } else {
        setAllowed(false)
      }
    }
  }, [messages, isLoading])

  useEffect(() => {
    if (isAllowed === null) {
      return
    }
    if (!prompt) {
      return
    } 
    if (isAllowed === false) {
      setProgress(100)
      setPrompt(null)
      setOriginalPrompt(null)
      setMessages([])
      return
    }
    console.log('generateAndPoll prompt...', prompt)
    generateAndPoll(prompt, options)
  }, [isAllowed])

  const generateAndPoll = useCallback(async (prompt: string, options?: ImageGeneratorOptions | null) => {
    setPrompt(null)
    setAllowed(null)
    setOriginalPrompt(null)
    setMessages([])
    try {
      const response = await fetch('/api/imagine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, options }),
      });
      const data: GenerateResponse = await response.json();
      pollImage(data)
    } catch (error) {
      console.error("Failed to generate image", error);
    }
  }, []);

  const mutate = async(argument: string) => {
    const response = await fetch('/api/imagine/mutate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        messageId,
        button: argument
       }),
    });
    const data: GenerateResponse = await response.json(); 
    pollImage(data)
  } 

  const pollImage = async(data: GenerateResponse) => {
    const { messageId } = data;
    setMessageId(messageId)
    const pollForImage = async () => {
      const res = await fetch(`/api/imagine/${messageId}`);
      const imageData: ImageData = await res.json();
      console.log(imageData)
      if (imageData.uri) {
        setImage(imageData.uri);
        setProgress(imageData.progress || 0);
      } else {
        if (imageData.progress) setProgress(imageData.progress);
      }
      if (imageData.buttons) {
        if (imageData.buttons.includes('U1')) {
          setResultType('draft')
        } else if (imageData.buttons.includes('Upscale (2x)')) {
          setResultType('final')
        } else {
          setResultType(null)
        }
      }
      if (!imageData.progress || imageData.progress < 100) {
        setTimeout(pollForImage, 10000);
      }
    };
    pollForImage();
  }

  const generate = (prompt: string, options?: ImageGeneratorOptions) => {
    setProgress(0)
    setImage('')
    setResultType(null)
    setAllowed(null)
    options ? setOptions(options) : setOptions(null)
    console.log(prompt)
    setOriginalPrompt(prompt)
    setPrompt(null)
  }

  const scale = async (imageNumber: number) => {
    setProgress(0)
    setImage('')
    setResultType(null)
    mutate(`U${imageNumber}`)
  }

  const variate = async (imageNumber: number) => {
    setProgress(0)
    setImage('')
    setResultType(null)
    mutate(`V${imageNumber}`)
  }

  return { messageId, setMessageId, image, isAllowed, resultType, progress, generate, scale, variate, setImage, setResultType };
}

export default useImageGenerator;
