import Image from "next/image";
import style from "./profile.module.css";
import Post from "../home/_component/post";
import BackButton from "../home/_component/backButton";


export default function Profile() {
  const user={
    id:'zxxzero',
    nickname: 'jizero',
    image: '/kkkkkamja.png',
  };
  
  return (
    

    <main className={style.main}>
      <div className={style.header}>
        <button className={style.backButton}>
          <BackButton/>
        </button>
        <h3 className={style.headerTitle}>{user.nickname}</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}>
            <img src={user.image} alt={user.id}></img>
            </div>
            <div className={style.userName}>
              <div>{user.nickname}</div>
              <div>@{user.id}</div>
            </div>
            <button className={style.followButton}>팔로우</button>
        </div>
        <div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </main>
  );
}
