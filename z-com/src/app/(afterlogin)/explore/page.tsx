import Image from "next/image";
import SearchForm from "@/app/(afterlogin)/_component/searchForm";
import style from './explore.module.css';
import Trend from "../_component/trend";

export default function Explore() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
      <SearchForm/>
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
      </div>
    </main>
  );
}
