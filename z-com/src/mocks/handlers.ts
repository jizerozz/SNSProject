import {http, HttpResponse} from 'msw';

export const handlers=[
        http.post('/api/login', ()=>{
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
        http.post('/api/logout', ()=>{
            return new HttpResponse(null, {
                headers:{
                    'Set-cookie':'connect.sid=;HttpOnly;Path=/;Max-Age=0'
                }
            })
        }),
        http.post('api/user', async({request})=>{
            return HttpResponse.text(JSON.stringify('user_exists'),{status:403})
        })
]
