import express from 'express';
import getExplore from './controllers/explore';
import getAllMountains from './controllers/mountain';
import getUser from './controllers/user';
import login from './controllers/login';

const router = express.Router();

router.get('/user/:email', getUser);
router.get('/mountain', getAllMountains);
router.get('/explore', getExplore);

router.post('/login', login);

export default router;
