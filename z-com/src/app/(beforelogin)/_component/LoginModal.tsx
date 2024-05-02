"use client";

import React, {ChangeEventHandler, useState} from "react";
import style from "@/app/(beforelogin)/_component/login.module.css"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginModal(){
    const [id, setId]=useState('');
    const [pw, setPw]=useState('');
    const [message, setMessage]=useState("");
    
    const Router=useRouter();

    const OnSubmit:ChangeEventHandler<HTMLFormElement>=async(e)=>{
        e.preventDefault();
        setMessage('');
        try{
        await signIn("credentials",{
            username:id,
            pw,
            redirect:false, //서버 redirect off
        });
        Router.replace('/home');
    }catch(err){
        console.error(err);
        setMessage('아이디와 비번이 일치하지않음');
    }
    };

    const OnClickClose=()=>{
        Router.back();
    };

    const OnChangeId:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setId(e.target.value);

    };

    const OnChangePwd:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setPw(e.target.value);

    };

    return (
        
        <div className={style.modalBackground}>
        <div className={style.modal}>
        <div className={style.modalHeader}>
        <button className={style.closeButton} onClick={OnClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
            <g>
            <path
                d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
            </svg>
        </button>
        <div>로그인하세요.</div>
        </div>
        <form onSubmit={OnSubmit}>
        <div className={style.modalBody}>
        <div className={style.inputDiv}>
            <label className={style.inputLabel} htmlFor="id">아이디</label>
            <input id="id" className={style.input} value={id} onChange={OnChangeId} type="text" placeholder=""/>
            </div>
            <div className={style.inputDiv}>
            <label className={style.inputLabel} htmlFor="password">비밀번호</label>
            <input id="password" className={style.input} value={pw} onChange={OnChangePwd} type="password" placeholder=""/>
            </div>
        </div>
        <div className={style.message}>{message}</div>
        <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !pw}>로그인하기</button>
        </div>
        </form>
    </div>
    </div>
    

    );
}