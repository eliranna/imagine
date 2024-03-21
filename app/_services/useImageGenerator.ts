import { useState, useEffect, useCallback } from 'react';

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

export interface UseImageGeneratorReturn {
  image: string;
  generate: (prompt: string, options?: ImageGeneratorOptions) => Promise<void>;
  progress: number;
  buttons: Button[];
}

function useImageGenerator(): UseImageGeneratorReturn {
  const [image, setImage] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [buttons, setButtons] = useState<Button[]>([]);

  const generate = useCallback(async (prompt: string, options?: ImageGeneratorOptions) => {
    try {
      const response = await fetch('/api/imagine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, options }),
      });
      const data: GenerateResponse = await response.json();
      const { messageId } = data;

      const pollForImage = async () => {
        const res = await fetch(`/api/imagine/${messageId}`);
        const imageData: ImageData = await res.json();

        if (imageData.uri) {
          setImage(imageData.uri);
          setProgress(imageData.progress || 0);
          setButtons(imageData.buttons || []);
          return;
        } else {
          if (imageData.progress) setProgress(imageData.progress);
          if (imageData.buttons) setButtons(imageData.buttons);

          setTimeout(pollForImage, 20000);
        }
      };

      pollForImage();
    } catch (error) {
      console.error("Failed to generate image", error);
    }
  }, []);

  return { image, generate, progress, buttons };
}

export default useImageGenerator;
