"use client"

import style from "@/app/(afterlogin)/messages/message.module.css";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ko");
dayjs.extend(relativeTime);


export function Room() {
  const router=useRouter();
  const user = {
    id: 'hero',
    nicakname: '영웅',
    Messages: [
      { roomId:123, id:'zxxzero', content: '나의 쪽지 내용', createdAt: new Date() },
      { roomId:123, id:'hero', content: '상대가 보내온 쪽지 내용 123456789', createdAt: new Date() },
    ]
  };
  const onClick=()=>{
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);;
  }

  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.userimage}>
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nicakname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp;
          <span className={style.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={style.roomLastChat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
