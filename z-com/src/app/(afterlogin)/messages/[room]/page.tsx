import {faker} from "@faker-js/faker";
import style from "./room.module.css";
import Link from "next/link";
import BackButton from "../../home/_component/backButton";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import cx from "classnames";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Roompage(){

    const user={
        id:'hero',
        nickname:'영웅',
        Image:faker.image.avatar(),
    }
    const messages=[
        { messageId:1, roomId:123, id:'zxxzero', content: '나의 쪽지 내용', createdAt: new Date() },
        { messageId:2, roomId:123, id:'hero', content: '상대가 보내온 쪽지 내용 123456789', createdAt: new Date() },
    ]

    return(
        <div className={style.main}>
            <div className={style.header}>
                <BackButton/>
                </div>
                <Link href={user.nickname} className={style.userInfo}>
                    <img src={user.Image} alt={user.id}/>
                    <div><b>{user.nickname}</b></div>
                    <div>@{user.id}</div>
                </Link> 
                <div className={style.list}>
                    {messages.map((m)=>{if(m.id==='zxxzero')
                    {
                        return(
                            <div key={m.messageId}  //cx를 통한 클래스 합성, 내가 보낸 메시지
                            className={cx(style.message, style.myMessage)}>  
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 MM분')}</div>
                            </div>
                        );
                    }
                    return(
                        <div key={m.messageId}  //cx를 통한 클래스 합성, 상대편이 보낸 메시지
                        className={cx(style.message, style.yourMessage)}>
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                            </div>
                    );

                    })}
                </div>
                </div>
            
        
    )


}