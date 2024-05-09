import style from "@/app/(afterlogin)/home/_component/post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import ActionButton from "./actionButton";
import PostArticle from "./postArticle";
import { faker } from "@faker-js/faker";
import Postimages from "@/app/(afterlogin)/home/_component/postImage";
import { Post as IPost } from "@/model/post";

dayjs.locale('ko');
dayjs.extend(relativeTime);


type Props={
    noImage?:boolean
    post:IPost
}
export default function Post({noImage,post}:Props){

const target=post;


//   if(Math.random()>0.5){
//     target.images.push(
//     {ImageId:1, Link:faker.image.urlLoremFlickr()}, //이미지 1개일 때
//     {ImageId:2, Link:faker.image.urlLoremFlickr()} //이미지 2개일 때
//     )
//     }

    return(
    <PostArticle post={target}>
        <div className={style.postWrapper}>
            <div className={style.postuserSection}>
                <Link href={`/${target.user.id}`} className={style.postuserImage}>
                    <img src={target.user.image} alt={target.user.nickname}></img>
                </Link>
                <div className={style.postShade}/>
            </div>
            <div className={style.postBody}>
                <div className={style.postMeta}>
                <Link href={`${target.user.id}`}>
                    <span className={style.postuserName}>{target.user.nickname}</span>
                    &nbsp;
                    <span className={style.postuserId}>@{target.user.id}</span>
                    &nbsp;
                    *
                    &nbsp;
                    </Link>
                    <span className={style.postDate}>{dayjs(target.createAt).fromNow(true)}</span>
                </div>
                <div>{target.content}</div>
                <div className={style.postImageSection}>
                <Postimages post={target}/>
                </div>
                <ActionButton/>
            </div>
        </div>
    </PostArticle>
    );

}