import express from 'express';
import { User } from '../schemas';

const userRouter = express.Router();

router.post('/', async (req, res) => {
        try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default userRouter;