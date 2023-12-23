import express from 'express';
import { analyse, getURL, urlshort } from '../controllers/url.js';
const router= express.Router();

router.post('/url', urlshort);
router.get('/:shortId', getURL);
router.get('/analytics/:shortId', analyse);
export default router;