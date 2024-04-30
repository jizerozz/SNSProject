import style from "./page.module.css";
import {faker} from "@faker-js/faker";
import PhotoModalCloseButton from "./_component/photoclose";
import ActionButtons from "@/app/(afterlogin)/home/_component/actionButton";
import Post from "@/app/(afterlogin)/home/_component/post";
import CommentForm from "@/app/(afterlogin)/[username]/status/[id]/_component/commentForm";

export default function Photomodal(){
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
          content: faker.lorem.text()
        }
      }
      return (
        <div className={style.container}>
          <PhotoModalCloseButton />
          <div className={style.imageZone}>
            <img src={photo.link} alt={photo.Post?.content} />
            <div className={style.image} style={{backgroundImage: `url(${photo.link})`}} />
            <div className={style.buttonZone}>
              <div className={style.buttonInner}>
                <ActionButtons/>
              </div>
            </div>
          </div>
          <div className={style.commentZone}>
            <Post/>
            <CommentForm />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      );
}