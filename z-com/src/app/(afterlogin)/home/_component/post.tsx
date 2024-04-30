import style from "@/app/(afterlogin)/home/_component/post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import ActionButton from "./actionButton";
import PostArticle from "./postArticle";
import { faker } from "@faker-js/faker";
import Postimages from "@/app/(afterlogin)/home/_component/postImage";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post(){

    const target={
        postId:1,
        User:{
            id:'kkamjaddi',
            nickname:'kkamja',
            image:'/kkkkkamja.png',
        },

        content:'클론 코딩 클론 코딩 클론 코딩 클론 코딩',
        createAt:new Date(),
        images:[] as any[],
    }

    if(Math.random()>0.5){
        target.images.push(
        {imageId:1, Link:faker.image.urlLoremFlickr()}, //이미지 1개일 때
        {imageId:2, Link:faker.image.urlLoremFlickr()} //이미지 2개일 때
        )
    }


    return(
    <PostArticle post={target}>
        <div className={style.postWrapper}>
            <div className={style.postUserSection}>
                <Link href={`/${target.User.id}`} className={style.postUserImage}>
                    <img src={target.User.image} alt={target.User.nickname}></img>
                </Link>
                <div className={style.postShade}/>
            </div>
            <div className={style.postBody}>
                <div className={style.postMeta}>
                <Link href={`${target.User.id}`}>
                    <span className={style.postUserName}>{target.User.nickname}</span>
                    &nbsp;
                    <span className={style.postUserId}>@{target.User.id}</span>
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