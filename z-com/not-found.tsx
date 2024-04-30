import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage=()=>{
    return(
        <div>
            <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색하세요.</div>
            <link href="/search">검색</link>
        </div>
    );
}

export default NotFound;