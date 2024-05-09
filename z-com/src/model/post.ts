import { PostImage } from "./postImage";
import { User } from "@/model/user";

export interface Post{
    postId:number,
    user:User,
    content:string,
    createAt:Date,
    images:PostImage[],
}