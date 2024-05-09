export async function getFollowRecommends() {
    const res=await fetch("http://localhost:9090/api/followPosting",{
    next:{
        tags:['posts', 'followings']
    },
    });

   if(!res.ok){
        throw new Error("not fetch getfollowrecommends");
    } 
    

    return res.json();
}