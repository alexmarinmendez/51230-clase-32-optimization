
import { Router } from 'express'

const router = Router() 

router.get('/', async(req, res) => {
    res.send("Mostrar usuarios")
})

export default router
