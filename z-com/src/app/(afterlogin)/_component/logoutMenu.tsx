"use client";

import style from "@/app/(afterlogin)/_component/logout.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LogoutMenu(){
    const router=useRouter();
    const {data:me}=useSession();
    const onlogout=()=>{
        signOut({redirect:false})
        .then(()=>{router.replace('/')
        });
    };

    if(!me?.user){
        return null;
    }

    return(
        <button className={style.logOutButton} onClick={onlogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user?.image as string} alt={me.user?.id}></img>
            </div>
        <div className={style.logOutUserName}>
            <div>{me.user?.name}</div>
            <div>{me.user?.id}</div>
        </div>
        </button>
        

    );


}
