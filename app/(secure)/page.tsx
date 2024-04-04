

import CommunityFeed from "_components/CommunityFeed";
import ImagesPanel from "_components/ImagesPanel";
import PromptPanel from "_components/PromptPanel";
import Grid from "_components/base/Grid"
import Spinner from "_components/base/Spinner";
import { auth } from "_helpers/server";
import useImageGenerator, { ImageGeneratorOptions } from "_services/useImageGenerator";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (!auth.isAuthenticated()) {
    redirect(`/account/login${searchParams.key ? `?key=${searchParams.key}`: ''}`)
  }

  return (
    <div>
      <CommunityFeed/>
    </div>
  )
}