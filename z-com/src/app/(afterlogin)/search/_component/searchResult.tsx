import { useQuery } from "@tanstack/react-query";
import {GetSearchResult} from "../_lib/getSearchResult";
import Post from "../../home/_component/post";
import { Post as IPost } from "@/model/post";

type Props={
    searchParams: {q:String, f?:String, pf?:String };
  }

export default function SearchResult({searchParams}:Props){
    const {data}=useQuery<IPost[], Object, IPost[],[_1:string,_2:string,Props:['searchParams']]>({
        queryKey:['posts','search',searchParams],
        queryFn:GetSearchResult},

)

    return data?.map((post)=>(
        <Post key={post.postId} post={post}/>
    ));


}