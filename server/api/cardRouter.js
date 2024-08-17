import express from 'express';
import { Card } from '../schemas';

const cardRouter = express.Router();

cardRouter.post('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

cardRouter.get('/:id', async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            res.status(404).json({ error: 'Card not found' });
            return;
        } else {
            res.json(card);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default cardRouter;