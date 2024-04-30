import Home from "@/app/(afterlogin)/home/page";

type props={
    params:{
    username:string,
    id:string,
    photoId:string,
    }
};

export default function Photo({params}:props){
    params.username
    params.id
    params.photoId
    return(
        <Home/>
    );
}