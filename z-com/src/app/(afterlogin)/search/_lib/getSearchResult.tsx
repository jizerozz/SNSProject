import { QueryFunction } from "@tanstack/react-query";
import { Post as IPost } from "@/model/post";

export const GetSearchResult:QueryFunction<IPost[],[_1:string,_2:string,searchParams:{q:string, pf?:string, f?:string}] >
=async({queryKey})=>{
    const[_1,_2,searchParams]=queryKey;
    const res=await fetch(`http://localhost:9090/api/search/${searchParams.q}?${searchParams.toString()}`,{
    next:{
        tags:['posts','search', searchParams.q],
    }
    });

    if(!res.ok){
        throw new Error("not fetch GetSearchResult");
    }

    return res.json();
}