import express from "express";
import cors from "cors"
const app = express()
import authRouter from "./router/route.js";

app.use(express.json())
app.use(cors())
app.use("/api/v1/user" , authRouter);



app.listen(3001, ()=> {
  console.log("app is listening on port 3001")
})


