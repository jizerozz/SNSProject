import Image from "next/image";
import style from '@/app/(afterlogin)/search/search.module.css';
import Tab from "@/app/(afterlogin)/search/_component/tab";
import BackButton from "../home/_component/backButton";
import SearchForm from "@/app/(afterlogin)/_component/searchForm";
import Post from "../home/_component/post";

type Props={
  searchParams: {q:String, f?:String, pf?:String };
}
export default function Search({searchParams}:Props) {
  return (
  <main className={style.main}>
    <div className={style.searchTop}>
      <div className={style.searchZone}>
        <div className={style.buttonZone}>
          <BackButton/>
        </div>
        <div className={style.formZone}>
          <SearchForm q={searchParams.q}/>
        </div>
      </div>
      <Tab/>
    </div>
    <div className={style.list}>
      {/*<SearchResult searchParams={searchParams}/>*/}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  </main>
  );
}
