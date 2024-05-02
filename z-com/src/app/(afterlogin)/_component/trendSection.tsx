"use client";

import style from "@/app/(afterlogin)/_component/trendSection.module.css";
import Trend from "@/app/(afterlogin)/_component/trend";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function TrendSection(){
    const pathname=usePathname();
    const session=useSession();

    if(pathname==='/explore') return null;
    if(session.data?.user){
    return(
        <div className={style.trendBg}>
            <div className={style.trend}>
            <h3>나를 위한 트렌드</h3>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
            </div>
        </div>
        );
    }
    return (
        <div className={style.trendBg}>
            <div className={style.notrend}>
                트렌드를 가져올 수 없습니다. 로그인하세요.
            </div>
        </div>
    )

}