"use client"

import { ReactNode } from "react";
import style from './post.module.css';
import { useRouter } from "next/navigation";

type props={                //target에 대한 type 정의
    children:ReactNode,
    post:{
        content:string,
        postId:number,
    User:{
        id:string,
        nickname:string,
        image:string,
    }
    ,
    createAt:Date,
    images:any[],
}
};

export default function postArticle({children, post}:props){
    const router=useRouter();
    const onClick=()=>{
        router.push(`/${post.User.id}/status/${post.postId}`);
    };
    
    return(
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>

    );
}