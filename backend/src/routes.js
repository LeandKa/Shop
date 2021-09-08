import Router from 'express';
import CategoriaController from './app/controllers/CategoriaController';
import ProdutoController from './app/controllers/ProdutoController';
import UserController from './app/controllers/UserController';
import multerConfig from './config/multerS3';
import auth from './middlewares/auth';

const router = new Router();

//Categoria
router.get('/categoria', CategoriaController.index);
router.post('/categoria', CategoriaController.create);
router.delete('/categoria', CategoriaController.delete);

//Produto
router.get('/produto', ProdutoController.index);
router.get('/produto-name', ProdutoController.getBySearch);
router.get('/produto/:id', ProdutoController.getById);
router.get('/produto-categoria', ProdutoController.getByCategorie);
router.post('/produto', multerConfig.single('img'), ProdutoController.create);
router.put('/produto', ProdutoController.update);
router.delete('/produto', ProdutoController.delete);

//Users - Session
router.post('/user', UserController.create);
router.delete('/user', UserController.delete);
router.post('/session', UserController.session);

export default router;
