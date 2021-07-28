import { Router, Request, Response } from "express";


const router = Router()

router.get('/login', (req: Request, res: Response) => {
    res.send(`
            <div>
                hello get login form is here
            </div>
        `)
})


export { router }