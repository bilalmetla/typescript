import { Router, Request, Response } from "express";


const router = Router()

router.get('/v1/login', (req: Request, res: Response) => {
    res.send(`
            <div>
                hello get login form is here
            </div>
        `)
})


export { router }