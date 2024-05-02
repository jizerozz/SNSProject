"use client";

import style from "@/app/(afterlogin)/_component/logout.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LogoutMenu(){
    const router=useRouter();
    const {data:me}=useSession();
    console.log('me:',me);


    const onlogout=()=>{
        signOut({redirect:false})
        .then(()=>{router.replace('/')
        });
    };

    if(!me?.user){
        return null;
    }
    //id값은 user.id 대신 .email로 사용
    return(
        <button className={style.logOutButton} onClick={onlogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user?.image as string} alt={me.user?.email as string}></img>
            </div>
        <div className={style.logOutUserName}>
            <div>{me.user?.name}</div>
            <div>{me.user?.email as string}</div>
        </div>
        </button>
        

    );


}
