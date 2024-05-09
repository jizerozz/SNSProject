import style from "@/app/(afterlogin)/home/_component/post.module.css";
import Link from "next/link";
import cx from "classnames";
import { Post as IPost } from "@/model/post";

type Props={            //postArticle에서 정의해둔 target의 type
    post: {
        postId: number;
        content: string,
        user: {
          id: string,
          nickname: string,
          image: string,
        },
        createAt: Date,
        images: any[],
      }
};


export default function PostImage({post}:Props){
    if(!post.images) return null; //postimages가 없을 때 null return
    if(!post.images.length) return null; //postimages.length 배열의 갯수가 없거나 배열이 아닐 때 null 리턴
    
    //이미지를 한번에 4개까지 업로드 가능, cx합성은 이미지 갯수에 따른 레이아웃 스타일 만들기 위해 적용
    if(post.images.length===1){
        return(
                <Link 
                href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`} 
                className={cx(style.postImageSection, style.oneImage)}
                style={{backgroundImage: `url(${post.images[0]?.Link})`, backgroundSize:'contain'}}
                > 
                <img src={post.images[0]?.Link} alt=""/>
                </Link>  
        );

    }
    if(post.images.length===2){
        return(
                <div
                className={cx(style.postImageSection, style.twoImage)}>
                <Link
                href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}  
                style={{backgroundImage:`url(${post.images[0]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link
                href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[1]?.Link})`, backgroundSize:'cover'}}                
                ></Link>
                
                </div>
                
        );

    }
    if(post.images.length===3){
        return(
                <div className={cx(style.postImageSection, style.threeImage)}>
                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[0]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[1]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[2]?.Link})`, backgroundSize:'cover'}}></Link>
                </div>
        );

    }
    if(post.images.length===4){
        return(
            <div className={cx(style.postImageSection, style.fourImage)}>
                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[0]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[1]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[2]?.Link})`, backgroundSize:'cover'}}></Link>

                <Link href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].ImageId}`}
                style={{backgroundImage:`url(${post.images[3]?.Link})`, backgroundSize:'cover'}}></Link>

                </div>
        );

    }
    return null;
}