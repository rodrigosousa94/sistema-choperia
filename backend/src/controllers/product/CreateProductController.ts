import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

const productService = new CreateProductService()

class CreateProductController {
    async handle(req: Request, res: Response){
        const { name, price, description, category_id } = req.body

        if(!req.file){
            throw new Error("Erro ao enviar imagem")
        }else {

            const { originalname, filename: banner } = req.file
            const product = await productService.execute( {name, price, description, banner, category_id} )

            return res.status(201).json(product)
        }


    }
}

export { CreateProductController }

