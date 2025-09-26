import { WebSocketServer } from 'ws';
import  { db }  from "@repo/db/client"


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
  ws.on('error', console.error);
  const response  = await db.user.findMany()

  ws.send(JSON.stringify(response))

  ws.on('message', async function message(data) {


  const data1 =  await db.user.create(
    {
      data : {
        email : JSON.stringify(Math.random()),
        password : JSON.stringify(Math.random())
      }
    }
   )

   ws.send(JSON.stringify(data1))
    
    console.log('received: %s', data);
  });

});