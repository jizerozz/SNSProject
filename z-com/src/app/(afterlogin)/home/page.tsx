import Image from "next/image";
import style from "@/app/(afterlogin)/home/home.module.css";
import Tab from "@/app/(afterlogin)/home/_component/tab";
import PostForm from "@/app/(afterlogin)/home/_component/postform";
import TabProvider from "@/app/(afterlogin)/home/_component/tabProvider";
import Post from "@/app/(afterlogin)/home/_component/post";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cache } from "react";
import  {getPostRecommends}  from "@/app/(afterlogin)/home/_lib/getPostRecommends";
import PostRecommends from "./_component/postRecommends";


export default async function Home() {

  const queryClient=new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['posts', 'recommends'], queryFn:getPostRecommends}); //key에 들어있는 값들을 불러올 때는 항상 getpostrecommends를 호출
  const dehydratedState=dehydrate(queryClient); //hydrate: 서버에서 온 데이터를 클라이언트에서 그대로 물려받는 것

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
      <TabProvider>
      <Tab/>
      <PostForm/>
      <PostRecommends/>
      </TabProvider>
      </HydrationBoundary>
    </main>
  
  );
}
