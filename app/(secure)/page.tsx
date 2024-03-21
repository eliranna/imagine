'use client'

import ImagesPanel from "_components/ImagesPanel";
import PromptPanel from "_components/PromptPanel";
import Grid from "_components/base/Grid"
import { Page } from "_components/base/Page";
import useImageGenerator, { ImageGeneratorOptions } from "_services/useImageGenerator";

export default function Home() {

  const {image, generate, progress, buttons} = useImageGenerator()

  const handleGenerate = async (prompt: string, options?: ImageGeneratorOptions) => {
    await generate(prompt)
  }

  return (
    <Page>
      <Grid className="py-10 h-full" style={{
        height: 'calc(100vh - 64px)'
      }}>
        <div className="h-full col-start-1 col-span-4">
          <PromptPanel onGenerate={handleGenerate}/>
        </div>
        <div className="h-full col-start-6 col-span-7">
          <ImagesPanel image={image} progress={progress}/>
        </div>
      </Grid>
    </Page>

  );
}
