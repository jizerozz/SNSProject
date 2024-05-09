"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

const onSubmit=async(prevstate:any, formData:FormData)=>{
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
      if(!formData.get('nickname')){ //nickname 값이 없을 때 메시지 출력
        return {message: 'no_nick'};
      }
      let shouldRedirect=false;

      try{
      const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method:'post',
        body:formData,
        credentials:'include',  //쿠키 판별
      });
      console.log(response.status);
      if(response.status===403){    //회원가입 중 이미 똑같은 아이디로 가입한 회원이 있는 경우 알려주기 위함
        return {message:'user_exists'};
      }
      console.log(await response.json());
      shouldRedirect=true;

      await signIn("credentials",{  //회원가입 성공 후 로그인까지 같이 하게함
        username:formData.get('id'),
        password:formData.get('password'),
        redirect:false, //서버 redirect off
    });
    }catch(err){
      console.error(err);
      
    }

    if(shouldRedirect){
      redirect(`/home`); //try catch 내부에서는 사용 불가
    }
    return { message: null };

    }

    export default onSubmit;