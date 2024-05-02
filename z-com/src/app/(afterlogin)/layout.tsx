import React, { ReactNode } from "react";
import style from "@/app/(afterlogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import zlogo from "../../../public/zlogo.png";
import NavMenu from "@/app/(afterlogin)/_component/navMenu";
import LogoutMenu from "./_component/logoutMenu";
import TrendSection from "@/app/(afterlogin)/_component/trendSection";
import FollowRecommend from "@/app/(afterlogin)/_component/followRecommend";
import RightSearchSection from "./_component/rightSearch";
import { auth } from "@/auth";



type Props={children:ReactNode, modal:ReactNode}

export default async function AfterLoginLayout({children, modal}:Props) 
{
    const session=await auth();
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                <div className={style.leftSectionFixed}>
                    <Link className={style.logo} href="/home">
                        <div className={style.logoPill}>
                            <Image src={zlogo} alt="z-com logo" width={40}/>
                        </div>
                    </Link>
                    {session?.user&&<>              
                    <nav>
                        <ul>
                            <NavMenu/>
                        </ul>
                        <li>
                            <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                        </li>
                    </nav>
                    <LogoutMenu/>
                    </>}
                    </div>
                </section>
                </header>
                
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                <main className={style.main}>{children}</main>
                <section className={style.rightSection}>
                    <RightSearchSection/>
                    <TrendSection/>
                    <div className={style.followRecommend}>
                    <h3>팔로우 추천</h3>
                    <FollowRecommend/>
                    <FollowRecommend/>
                    <FollowRecommend/>
                    <FollowRecommend/>
                    <FollowRecommend/>
                    </div>
                </section>
                </div>
            </div>
            {modal}
        </div>
    );    
}