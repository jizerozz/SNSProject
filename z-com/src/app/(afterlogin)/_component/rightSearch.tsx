"use client"

import style from "@/app/(afterlogin)/_component/rightSearch.module.css";
import { usePathname } from "next/navigation";
import SearchForm from "@/app/(afterlogin)/_component/searchForm";

export default function RightSearch(){

    const onChangeFollow=()=>{
        
    };

    const onchangeAll=()=>{};
    const onChangeCurrent=()=>{};
    const onchangeWhere=()=>{};

    const pathname=usePathname()
    if(pathname==='/explore')
        return null;

    if(pathname==='/search'){
        return (
        <div>
            <h5 className={style.filterTitle}>검색필터</h5>
            <div className={style.filterSection}>
                <div>
                    <label>사용자</label>
                    <div className={style.radio}>
                        <div>모든 사용자</div>
                        <input type="radio" name="pf" defaultChecked onChange={onchangeAll}>                            
                        </input>
                    </div>
                    <div className={style.radio}>
                        <div>나를 팔로우하는 사람들</div>
                        <input type="radio" name="pf" value="on" onChange={onChangeFollow}>
                        </input>
                    </div>
                    <label>위치</label>
                    <div className={style.radio}>
                        <div>어디에서나</div>
                        <input type="radio" name="pf" defaultChecked onChange={onchangeWhere}>
                        </input>
                    </div>
                    <div className={style.radio}>
                        <div>현 위치 주변</div>
                        <input type="radio" name="pf" value="on" onChange={onChangeCurrent}>
                        </input>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    return(
        <div style={{marginBottom:60, width: 'inherit'}}>
            <SearchForm/>
        </div>
    );
}