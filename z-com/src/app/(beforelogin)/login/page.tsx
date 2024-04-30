import { redirect } from "next/navigation";
import MainModal from "@/app/(beforelogin)/_component/MainModal";
export default function Login(){
    redirect('/i/flow/login');
    return(
        <MainModal/>
    );
}