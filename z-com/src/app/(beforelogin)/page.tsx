"use client";

import { useRouter } from "next/navigation";
import MainModal from "./_component/MainModal";

export default function Home() {
  // const router=useRouter();
  // router.replace('/i/flow/login'); //localhost/3000 입력시 메인창에서 바로 로그인 창으로 라우팅
  return (
    <MainModal/>
  );
  
}
