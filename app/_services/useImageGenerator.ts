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

export interface Mutations {
  scale: boolean,
  variate: boolean
}

export type Button = string

export interface UseImageGeneratorReturn {
  image: string;
  mutations: Mutations;
  generate: (prompt: string, options?: ImageGeneratorOptions) => void;
  progress: number | null;
  scale: any;
  variate: any;
}

function useImageGenerator(): UseImageGeneratorReturn {

  const [messageId, setMessageId] = useState<string>('')
  const [image, setImage] = useState<string>('');
  const [mutations, setMutations] = useState<Mutations>({
    scale: false,
    variate: false
  });
  const [progress, setProgress] = useState<number | null>(null);
  const [buttons, setButtons] = useState<Button[]>([]);
  const {messages, isLoading, append} = useChat()

  const [originalPrompt, setOriginalPrompt] = useState<string | null>()
  const [prompt, setPrompt] = useState<string | null>()
  const [options, setOptions] = useState<ImageGeneratorOptions | null>(null)

  useEffect(() => {
    originalPrompt && translatePrompt(originalPrompt)
  }, [originalPrompt])

  const translatePrompt = (prompt: string) => {
    append({
      role: 'user',
      content: `translate the following to English, DO NOT write anything else except the translation result: ${prompt}`
    })
  }

  useEffect(() => {
    !isLoading && messages && messages.length > 0 && setPrompt(messages[messages.length-1].content)
  }, [messages, isLoading])

  useEffect(() => {
    prompt && generateAndPoll(prompt, options)
  }, [prompt])

  const generateAndPoll = useCallback(async (prompt: string, options?: ImageGeneratorOptions | null) => {
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
      if (imageData.uri) {
        setImage(imageData.uri);
        setMutations({
          scale: imageData.buttons ? imageData.buttons.includes('U1') : false,
          variate: imageData.buttons ? imageData.buttons.includes('V1') : false,
        })
        setProgress(imageData.progress || 0);
        setButtons(imageData.buttons || []);
      } else {
        if (imageData.progress) setProgress(imageData.progress);
        if (imageData.buttons) setButtons(imageData.buttons);
      }
      if (!imageData.progress || imageData.progress < 100) {
        setTimeout(pollForImage, 20000);
      }
    };
    pollForImage();
  }

  const generate = (prompt: string, options?: ImageGeneratorOptions) => {
    setProgress(0)
    setImage('')
    options ? setOptions(options) : setOptions(null)
    setOriginalPrompt(prompt)
  }

  const scale = async (imageNumber: number) => {
    setProgress(0)
    setImage('')
    mutate(`U${imageNumber}`)
  }

  const variate = async (imageNumber: number) => {
    setProgress(0)
    setImage('')
    mutate(`V${imageNumber}`)
  }

  return { image, mutations, progress, generate, scale, variate };
}

export default useImageGenerator;
