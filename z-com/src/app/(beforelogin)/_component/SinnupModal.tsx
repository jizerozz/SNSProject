"use client";

import style from "@/app/(beforelogin)/_component/signup.module.css";
import BackButton from "@/app/(afterlogin)/home/_component/backButton";
import { redirect } from "next/navigation";

export default function Signup(){

    let shouldRedirect=false;
    const submit=async(formData:FormData)=>{
      //이 곳의 코드는 브라우저에 노출되지않음

      if(!formData.get('id')){  //id값이 없을 때 메시지 출력
        return {message: 'no_id'};
      }
      if(!formData.get('password')){ //password 값이 없을 때 메시지 출력
        return {message: 'no_pwd'};
      }
      if(!formData.get('image')){ //image 값이 없을 때 메시지 출력
        return {message: 'no_image'};
      }
      if(!formData.get('name')){ //name 값이 없을 때 메시지 출력
        return {message: 'no_name'};
      }



      try{
      "use server";
      const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method:'post',
        body:formData,
        credentials:'include',  //쿠키 판별
      })
      console.log(response.status);
      if(response.status===403){    //회원가입 중 이미 똑같은 아이디로 가입한 회원이 있는 경우 알려주기 위함
        return {message:'user_exists'};
      }
      console.log(await response.json());
      shouldRedirect=true;
    }catch(err){
      console.error(err);
    }

    if(shouldRedirect){
      redirect('/home'); //try catch 내부에서는 사용 불가
    }


    }


    return(
        <>
        <div className={style.modalBackground}>
          <div className={style.modal}>
            <div className={style.modalHeader}>
              <BackButton/>
              <div>계정을 생성하세요.</div>
            </div>
            <form action={submit}>
              <div className={style.modalBody}>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="id">아이디</label>
                  <input id="id" className={style.input} type="text" placeholder=""
                      required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="name">닉네임</label>
                  <input id="name" name="id" className={style.input} type="text" placeholder=""
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
                <button type="submit" className={style.actionButton}>가입하기</button>
              </div>
            </form>
          </div>
        </div>
      </>
      );

}