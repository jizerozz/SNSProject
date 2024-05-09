"use client"

import { useContext } from "react";
import { TabContext } from "../home/_component/tabProvider";
import PostRecommends from "../home/_component/postRecommends";
import FollowPosting from "../home/_component/follwPosting";

export default function TabDecider(){
    const{tab} =useContext(TabContext);
    if(tab==='fol'){
        return<FollowPosting/>       
    }
    return<PostRecommends/>
    
}