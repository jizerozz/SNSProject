"use client"

import { useQuery } from "@tanstack/react-query"
import { getPostRecommends } from "../_lib/getPostRecommends"
import Post from "./post"

export default function PostRecommends(){
    const {data}= useQuery({queryKey:['posts','recommends'], queryFn:getPostRecommends})

    
    
}