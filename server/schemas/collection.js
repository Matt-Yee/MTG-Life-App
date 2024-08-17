import mongoose from 'mongoose';

const { Schema } = mongoose;

const collectionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Card',
        },
    ],
    });

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;