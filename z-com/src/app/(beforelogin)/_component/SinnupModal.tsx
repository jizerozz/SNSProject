"use client";

import style from "@/app/(beforelogin)/_component/signup.module.css";
import BackButton from "@/app/(beforelogin)/_component/BackButton";
import onSubmit from "@/app/(beforelogin)/_lib/signup";
import { useFormState, useFormStatus } from "react-dom";

function showMessage(message:String|null){
  if(message==='no_id'){
    return '아이디 입력 필요';
  }
  if(message==='no_pwd'){
    return '비밀번호 입력 필요';
  }
  if(message==='no_image'){
    return '이미지 삽입 필요';
  }
  if(message==='no_nick'){
    return '닉네임 입력 필요';
  }
  return '';
}


export default function Signup(){

    const [state, formAction]=useFormState(onSubmit,{message:null});
    const {pending} = useFormStatus();

    return(
        <>
        <div className={style.modalBackground}>
          <div className={style.modal}>
            <div className={style.modalHeader}>
              <BackButton/>
              <div>계정을 생성하세요.</div>
            </div>
            <form action={formAction}>
              <div className={style.modalBody}>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="id">아이디</label>
                  <input id="id" name="id" className={style.input} type="text" placeholder=""
                      required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="name">닉네임</label>
                  <input id="nickname" name="nickname" className={style.input} type="text" placeholder=""
                        required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                  <input id="password" name="password" className={style.input} type="password" placeholder=""
                        required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="image">프로필</label>
                  <input id="image" name="image" required className={style.input} type="file" accept="image/*"
                        
                  />
                </div>
              </div>
              <div className={style.modalFooter}>
                <button type="submit" className={style.actionButton} disabled={pending}>가입하기</button>
                <div className={style.errer}>{showMessage(state?.message)}</div>
              </div>
            </form>
          </div>
        </div>
      </>
      );

}