import express from 'express';
import { getExploreUnclimbed, getExploreRandom } from './controllers/explore';
import { getAllMountains, getMountainById } from './controllers/mountain';
import getRandomUserPics from './controllers/user';
import login from './controllers/login';

const router = express.Router();

router.get('/me', getRandomUserPics);

router.get('/mountain', getAllMountains);
router.get('/mountain/:id', getMountainById);

router.get('/explore/random', getExploreRandom);
router.get('/explore/unclimbed', getExploreUnclimbed);

router.post('/login', login);

export default router;
