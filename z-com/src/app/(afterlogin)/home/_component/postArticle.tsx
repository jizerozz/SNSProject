"use client"

import { ReactNode } from "react";
import style from './post.module.css';
import { useRouter } from "next/navigation";
import { Post as IPost } from "@/model/post";

type props={                //target에 대한 type 정의
    children:ReactNode,
    post: {
        postId: number;
        content: string,
        user: {
          id: string,
          nickname: string,
          image: string,
        },
        createAt: Date,
        images: any[],
      }
};

export default function PostArticle({children, post}:props){
    const router=useRouter();
    const onClick=()=>{
        router.push(`/${post.user.id}/status/${post.postId}`);
    };
    
    return(
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>

    );
}