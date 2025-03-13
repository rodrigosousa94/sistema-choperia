import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { ItemController } from "./controllers/item/ItemController";
import { RemoveItemController } from "./controllers/item/RemoveItemController";

import uploadConfig from './config/multer'


const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS DE CRIAÇÃO, LOGIN E DETALHES DE USUARIO
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', AuthMiddleware, new DetailUserController().handle)

// ROTAS DE CATEGORIAS
router.post('/category', AuthMiddleware, new CreateCategoryController().handle)
router.get('/category', AuthMiddleware, new ListCategoryController().handle)

// ROTAS DE PRODUTOS
router.post('/product', AuthMiddleware, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', AuthMiddleware, new ListByCategoryController().handle)

//ROTAS DE ORDENS (Abrir / deletar Mesa)
router.post('/order', AuthMiddleware, new CreateOrderController().handle)
router.delete('/order', AuthMiddleware, new RemoveOrderController().handle)

// Rotas de adicionar e deletar ITENS a mesa
router.post('/order/add', AuthMiddleware, new ItemController().handle)
router.delete('/order/remove', AuthMiddleware, new RemoveItemController().handle)

export { router };
