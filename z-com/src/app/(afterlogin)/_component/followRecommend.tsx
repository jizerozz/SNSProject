"use client";

import style from "@/app/(afterlogin)/_component/followRecommend.module.css";


export default function FollowRecommend(){
    
    const onFollow=()=>{

    };
    
    const User={
        id:'cxxvin',
        nickname:'jinxx',
        image:'/yRsRRjGO.jpg',    
    };
    
    return(
    <div className={style.container}>
        <div className={style.userLogoSection}>
            <div className={style.userLogo}>
                <img src={User.image} alt={User.id}/>
            </div>
        </div>
        <div className={style.userInfo}>
            <div className={style.title}>{User.nickname}</div>
            <div className={style.count}>@{User.id}</div>
        </div>
        <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
        </div>
    </div>
    );

}