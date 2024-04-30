"use client"

import style from "@/app/(afterlogin)/home/_component/tab.module.css";
import { useState } from "react";



export default function Tab(){

    const [tab, setTab]=useState('Rec');
    
    const onClickFol=()=>{
        setTab('Fol');

    };

    const onClickRec=()=>{
        setTab('Rec');
    };


    return(
    <div className={style.homeFixed}>
        <div className={style.homeText}>홈
        <div className={style.homeTab}>
            <div onClick={onClickRec}>
                추천
                <div className={style.tabIndicator} hidden={tab==='Fol'}/>                
            </div>
            <div onClick={onClickFol}>
                팔로우 중
                <div className={style.tabIndicator} hidden={tab==='Rec'}/>
            </div>
        </div>
        </div>
    </div>
    );

}