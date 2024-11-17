import { Router } from 'express';
import {addPhones,getAllPhones} from '../controller/productsController.js';

const router = Router();

router.route('/addPhones').post(addPhones);
router.route('/getAllPhones').post(getAllPhones);

export default router;