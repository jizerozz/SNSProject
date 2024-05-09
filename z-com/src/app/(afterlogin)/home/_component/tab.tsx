"use client"

import style from "@/app/(afterlogin)/home/_component/tab.module.css";
import { useContext, useState } from "react";
import { TabContext } from "./tabProvider";



export default function Tab(){

     const {tab, setTab}=useContext(TabContext);   //tapprovider에서 tabcontext 정보를 불러와서 사용
    
    const onClickFol=()=>{
        setTab('fol');

    };

    const onClickRec=()=>{
        setTab('rec');
    };


    return(
    <div className={style.homeFixed}>
        <div className={style.homeText}>홈
        <div className={style.homeTab}>
            <div onClick={onClickRec}>
                추천
                <div className={style.tabIndicator} hidden={tab==='fol'}/>                
            </div>
            <div onClick={onClickFol}>
                팔로우 중
                <div className={style.tabIndicator} hidden={tab==='rec'}/>
            </div>
        </div>
        </div>
    </div>
    );

}