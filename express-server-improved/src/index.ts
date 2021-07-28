import express, { Request, Response } from "express";
import { router } from "./routes/LoginRoutes";
import bodyParser from "body-parser";

import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(AppRouter.getInstance());


app.get('/', (req: Request, res: Response) => {
    res.send(
        `
        <div>
            <h1>Hi there! </h1>
        </div>
        `
    )
})

const port: number = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})