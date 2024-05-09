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

        console.log(authResponse.status, authResponse.statusText);

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

        const User = await authResponse.json();
        console.log('user', User);
          return {                  //return user 했으나 ts에서 오류 뱉어서 우회시킴
            email:User.id,          //id:user.id 값은 안읽힘 type.ts의 user에 있는 email로 대체
            name:User.nickname,
            image:User.image,
            ...User,
        }
    },
}),
    ]
});


