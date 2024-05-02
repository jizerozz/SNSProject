"use client";

import { useRouter } from "next/navigation";
import MainModal from "./_component/MainModal";

export default function Home() {
  const router=useRouter();
  router.replace('/i/flow/login');
  return (
    <MainModal/>
  );
  
}
