"use client"

import { useQuery } from "@tanstack/react-query"
import { Post as IPost } from "@/model/post"
import { getFollowRecommends } from "../_lib/getFollowRecommends"
import Post from "./post";


export default function FollowPosting(){
    const {data}=useQuery<IPost[]>({queryKey:['posts','followings'] ,
    queryFn:getFollowRecommends,


    });


    return data?.map((post)=>(
        <Post key={post.postId} post={post}/>
    ));
}