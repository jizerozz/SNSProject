import { NextResponse } from "next/server";
import { auth } from "./auth";


    export default async function Middleware(){
        const session=await auth();
        if(!session){
            return NextResponse.redirect("http://localhost:3000/i/flow/login"); //세션이 없으면 login창으로 redirect(예. 로그인 하지 않은 상태에서 home으로 갔을 경우 로그인창이 뜨도록 함)
        }
        return true; //있는경우 그대로 진행
    }

export const config={
    matcher:['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}