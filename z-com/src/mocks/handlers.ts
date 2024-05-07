import { faker } from '@faker-js/faker';
import {http, HttpResponse} from 'msw';
import { headers } from 'next/headers';


function generateDate(){
    const lastweek=new Date(Date.now());
    lastweek.setDate(lastweek.getDate()-7);
    return faker.date.between({
        from:lastweek,
        to:Date.now(),
    });
}

const User=[
    {id:'elonmusk', nickname:'elon musk', image: '/elonmusk'},
    {id:'kim', nickname:'kim kim', image:'/kimkim'},
    {id:'lee', nickname:'Lee', image:faker.image.avatar()},
];

export const handlers=[
        http.post(`/api/login`, ()=>{       //로그인 데이터
            return HttpResponse.json( {
                
                userId:1,
                nickname:'zxxzero',
                id:'jizero',
                image:'/kkkkkamja.png',

            },{
                headers: {
                  'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
                }
              }
            )
        }),
        http.post(`/api/logout`, ()=>{
            return new HttpResponse(null, {
                headers:{
                    'Set-cookie':'connect.sid=;HttpOnly;Path=/;Max-Age=0'
                }
            })
        }),
        http.post('api/users', async({request})=>{
            console.log('회원가입');

            //에러용
            //return HttpResponse.text(JSON.stringify('user_exists'),{status:403})
            //성공용
            return HttpResponse.text(JSON.stringify('ok'),{
                headers:{
                    'Set-cookie':'connect.sid=msw-cookie,HttpOnly;Path=/;',
                },
            })
        }),


        http.get('/api/postRecommends', ({request})=>{ //post 데이터
            return HttpResponse.json([
                {
                    postId:1,
                    User:User[0],
                    content:`${1} Z.com is so marvelous. I'm gonna buy that`,
                    Images:[{imageId:1, link:faker.image.urlLoremFlickr()}],
                    createdAt:generateDate(),
                },
                {
                    postId:2,
                    User:User[0],
                    content:`${2} Z.com is so marvelous. I'm gonna buy that`,
                    Images:[{imageId:2, link:faker.image.urlLoremFlickr()}],
                    createdAt:generateDate(),
                },
                {
                    postId:3,
                    User:User[0],
                    content:`${3} Z.com is so marvelous. I'm gonna buy that`,
                    Images:[{imageId:3, link:faker.image.urlLoremFlickr()}],
                    createdAt:generateDate(),
                },
                {
                    postId:4,
                    User:User[0],
                    content:`${3} Z.com is so marvelous. I'm gonna buy that`,
                    Images:[{imageId:4, link:faker.image.urlLoremFlickr()}],
                    createdAt:generateDate(),
                },

            ] )
        })
]
