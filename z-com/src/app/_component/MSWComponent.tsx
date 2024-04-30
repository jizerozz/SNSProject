//클라이언트 컴포넌트, 클라이언트 환경에서 mockServiceWorker파일이 요청을 가로채게 됨
"use client";

import {useEffect} from "react";

export const MSWComponent=()=>{
    useEffect(()=>{
        if(typeof window!=='undefined'){        //브라우저 창이 존재할 때
        if(process.env.NEXT_PUBLIC_API_MOCKING==="enabled"){
            require("@/mocks/browser");
        }
        }
    },[]);

    return null;

};
