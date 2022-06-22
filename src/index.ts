import { Request, Response } from "express"
import { app } from "./app"



app.get("/test", (req: Request, res: Response) => {
    console.log("Hello World!")
    res.status(200).send("Hello World!")
})