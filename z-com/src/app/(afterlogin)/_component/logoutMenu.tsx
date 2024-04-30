"use client";

import style from "@/app/(afterlogin)/_component/logout.module.css";
import Image from "next/image";

export default function logoutMenu(){
    const me={
        id: 'zxxzero',
        image:'kkkkkamja.png',
        nickname:'깜자',
    };

    const onlogout=()=>{

    };

    return(
        <button className={style.logOutButton} onClick={onlogout}>
            <div className={style.logOutUserImage}>
                <img src={me.image} alt={me.id}></img>
            </div>
        <div className={style.logOutUserName}>
            <div>{me.nickname}</div>
            <div>{me.id}</div>
        </div>
        </button>
        

    );


}
