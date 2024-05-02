import NextAuth, {CredentialsSignin} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";


export const{
    handlers:{GET, POST},
    auth,
    signIn,
}=NextAuth({
    pages:{
        signIn:"/i/flow/login",
        newUser:"i/flow/signup",
    },
    callbacks:{
        async authorized({request, auth}){
            if(!auth){
                return NextResponse.redirect("http://localhost:3000/i/flow/login"); //세션이 없으면 login창으로 redirect(예. 로그인 하지 않은 상태에서 home으로 갔을 경우 로그인창이 뜨도록 함)
            }
            return true; //있는경우 그대로 진행
        }
    },
    providers:[
    CredentialsProvider({
        async authorize(credentials) {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
            }),
        });
        console.log(authResponse.status, authResponse.statusText)
          if (!authResponse.ok) {
            const credentialsSignin=new CredentialsSignin();
            if(authResponse.status===404){
                credentialsSignin.code='no_user';
            }
            else if(authResponse.status===401){
                credentialsSignin.code='wrong_password';
            }
            throw credentialsSignin;
          }
  
        const user = await authResponse.json();
        console.log('user', user);
          return {                  //return user 했으나 ts에서 오류 뱉어서 우회시킴
            email:user.id,          //id:user.id 값은 안읽힘 type.ts의 user에 있는 email로 대체
            name:user.nickname,
            image:user.image,
            ...user,
        }
    },
}),
    ]
});


