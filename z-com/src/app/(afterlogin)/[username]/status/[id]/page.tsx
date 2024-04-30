import Image from "next/image";
import style from "./single.module.css";
import BackButton from "@/app/(afterlogin)/home/_component/backButton";
import Post from "@/app/(afterlogin)/home/_component/post";
import Comment from "./_component/commentForm";

export default function SinglePage() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton/>
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <Post/>
      <Comment/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
