

import Link from "next/link";
import style from "@/app/(afterlogin)/_component/trend.module.css";
import { usePathname } from "next/navigation";

export default function Trend(){

    

    return(
        <Link href={'/search?q=트렌드'} className={style.container}>
            <div className={style.count}>실시간 트렌드</div>
            <div className={style.title}>제목</div>
            <div className={style.count}>더미데이터 posts</div>
        </Link>
    );
}