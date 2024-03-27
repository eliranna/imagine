'use client'

import ImagesPanel from "_components/ImagesPanel";
import PromptPanel from "_components/PromptPanel";
import Grid from "_components/base/Grid"
import { Page } from "_components/base/Page";
import useImageGenerator, { ImageGeneratorOptions } from "_services/useImageGenerator";
import RootLayout from "_components/RootLayout";
import { useEffect } from "react";

export default function Home() {

  const {messageId, isAllowed, image, resultType, generate, progress, scale, variate, setImage, setResultType, setMessageId} = useImageGenerator()

  useEffect(() => {
    if (image) {
      localStorage.setItem('savedImage', image);
      localStorage.setItem('resultType', resultType || '');
      localStorage.setItem('messageId', messageId || '');
    }
  }, [image, resultType]);

  useEffect(() => {
    const savedImage = localStorage.getItem('savedImage');
    const resultType = localStorage.getItem('resultType');
    const messageId = localStorage.getItem('messageId');
    if (savedImage) {
      setImage(savedImage)
      setResultType(resultType)
      setMessageId(messageId)
    }
  }, []);

  const handleGenerate = async (prompt: string, options?: ImageGeneratorOptions) => {
    generate(prompt)
  }

  const handleScale = (imageNumber: number) => {
    scale(imageNumber)
  }

  const handleVariate = (imageNumber: number) => {
    variate(imageNumber)
  }

  const handleDownload = () => {
    window.open(image, '_blank');
  }

  const handleOnCopy = async () => {
    navigator.clipboard.writeText(image)
  }

  return (
    <RootLayout>
      <Page>
        <Grid className="py-10 h-full" style={{
          height: 'calc(100vh - 64px)'
        }}>
          <div className="h-full col-start-1 col-span-4">
            <PromptPanel onGenerate={handleGenerate} progress={progress} isAllowed={isAllowed}/>
          </div>
          <div className="h-full col-start-6 col-span-7">
            <div className="flex flex-col gap-3">
              <div>
                <ImagesPanel resultType={resultType} image={image} onScale={handleScale} onVariate={handleVariate} onDownload={handleDownload} onCopy={handleOnCopy}/>
              </div>
              <div>
                <div>
                  {resultType === 'draft' && (
                    <span>
                      עמדו מעל התמונה אותה תרצו להגדיל או לשכפלה לגרסאות שונות.
                    </span>
                  )}
                  {resultType === 'final' && (
                    <span>
                      הורידו את התמונה או העתיקו את הקישור לתמונה.
                    </span>
                  )}                
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Page>
    </RootLayout>
  );
}
