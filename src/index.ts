import { Request, Response } from "express"
import { app } from "./app"

app.get("/test", async (req: Request, res: Response) => {
    res.status(200).send("Hello World!")
})