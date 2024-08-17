import express from 'express';
import { Collection } from '../schemas';

const collectionRouter = express.Router();

collectionRouter.post('/', async (req, res) => {
    try {
        const collections = await Collection.find();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

collectionRouter.get('/:id', async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id);
        if (!collection) {
            res.status(404).json({ error: 'Collection not found' });
            return;
        } else {
            res.json(collection);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default collectionRouter;