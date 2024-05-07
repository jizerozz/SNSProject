import { PostImage } from "./postImage";
import { User } from "./user";

export interface Post{
    postId:number,
    User:User,
    content:string,
    createAt:Date,
    images:PostImage[],
}