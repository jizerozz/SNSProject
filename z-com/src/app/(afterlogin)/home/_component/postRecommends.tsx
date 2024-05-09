"use client"

import { useQuery } from "@tanstack/react-query"
import  {getPostRecommends}  from "@/app/(afterlogin)/home/_lib/getPostRecommends";
import { Post as IPost } from "@/model/post";
import Post from "@/app/(afterlogin)/home/_component/post";


export default function PostRecommends(){
    const {data}= useQuery<IPost[]>({queryKey:['posts', 'recommends'], 
    queryFn:getPostRecommends,
    staleTime:60*1000, //fresh->stale  1분마다 데이터를 가져옴
    gcTime:300*1000,//gcTime은 scaleTime보다 커야함
});

    if(!{data}){
        <div>데이터를 불러오는 중 ...</div>
    }
    return data?.map((post)=>(
        <Post key={post.postId} post={post}/>)
    )
}