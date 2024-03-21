'use client'

import ImagesPanel from "_components/ImagesPanel";
import PromptPanel from "_components/PromptPanel";
import Grid from "_components/base/Grid"
import { Page } from "_components/base/Page";
import useImageGenerator, { ImageGeneratorOptions } from "_services/useImageGenerator";

export default function Home() {

  const {image, mutations, generate, progress, scale, variate} = useImageGenerator()

  const handleGenerate = async (prompt: string, options?: ImageGeneratorOptions) => {
    generate(prompt)
  }

  const handleScale = (imageNumber: number) => {
    scale(imageNumber)
  }

  const handleVariate = (imageNumber: number) => {
    variate(imageNumber)
  }

  return (
    <Page>
      <Grid className="py-10 h-full" style={{
        height: 'calc(100vh - 64px)'
      }}>
        <div className="h-full col-start-1 col-span-4">
          <PromptPanel onGenerate={handleGenerate} progress={progress}/>
        </div>
        <div className="h-full col-start-6 col-span-7">
          <ImagesPanel allowScale={mutations.scale} allowVariate={mutations.variate} image={image} onScale={handleScale} onVariate={handleVariate}/>
        </div>
      </Grid>
    </Page>

  );
}
