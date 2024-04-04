import express, { Request, Response } from 'express'
import products from '../models/productModel'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(products)
})


router.get('/:id', (req: Request, res: Response) => {
  console.log(req.params.id as unknown as number)
  res.send(
    products.find (
      (product) => product.id === Number.parseInt(req.params.id, 10)
    ),
  )
})
export default router
