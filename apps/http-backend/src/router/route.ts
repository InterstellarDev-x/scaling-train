import { Router , Response , Request } from "express";

const authRouter = Router()
import { db } from "@repo/db/client"

authRouter.post("/" , async(req : Request , res : Response)=> {

    const response = await db.user.create({
        data : {
            email : JSON.stringify(Math.random()*100),
            password : JSON.stringify(Math.random()*100)
        }
    })

    res.json({
        response
    })
})



authRouter.get("/get" , async(req : Request , res : Response)=> {
    
    const response = await db.user.findMany()

return res.json({
    response
})

    
})


export default authRouter