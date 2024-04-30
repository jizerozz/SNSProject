import { ReactNode } from "react";
import styles from "@/app/page.module.css";
import style from "@/app/(beforelogin)/@modal/(.)i/flow/login/login.module.css";

type Props={children:ReactNode, modal:ReactNode} // 가독성을 위해 typescript의 type형 변수를 활용하여 매개변수 타입 지정

export default function Layout({children, modal}:Props)
{
    return(
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    );
}

//주소가 z.com일 때 @modal->@modal/default.tsx , children->page.tsx