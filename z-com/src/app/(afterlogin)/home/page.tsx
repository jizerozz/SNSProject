import Image from "next/image";
import style from "./home.module.css";
import Tab from "@/app/(afterlogin)/home/_component/tab";
import PostForm from "@/app/(afterlogin)/home/_component/postform";
import TabProvider from "@/app/(afterlogin)/home/_component/tabProvider";
import Post from "@/app/(afterlogin)/home/_component/post";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
      <Tab/>
      <PostForm/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/> 
      </TabProvider>
    </main>
  
  );
}
