import { Post } from "./post";

export interface PostImage{
    Link:string;
    ImageId:number;
    post?:Post;
}