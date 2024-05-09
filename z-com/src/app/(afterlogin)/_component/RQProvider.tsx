"use client";

import React, {useState} from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

type Props={
    children:React.ReactNode;
};

function RQProvider({children}:Props){
    const [client]=useState(
        new QueryClient({
            defaultOptions:{
                queries:{
                    refetchOnWindowFocus:false, //tab 전환 후 돌아올 때 새로운 데이터를 가져오는 것
                    retryOnMount:true, //컴포넌트 리마운트
                    refetchOnReconnect:true, //인터넷 연결이 끊겼다가 다시 접속됐을 때 데이터를 다시 가져오는 것
                    retry:false, //연결 실패 시 재시도
                },
            },
        })
    );


return (
    <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}/>
    </QueryClientProvider>
);
}



export default RQProvider;


