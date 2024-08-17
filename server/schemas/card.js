import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema({
    scryfallId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    typeLine: {
        type: String,
        required: true,
    },
    oracleText: {
        type: String,
        required: true,
    },
    manaCost: {
        type: String,
        required: true,
    },
    cmc: {
        type: Number,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    colorIdentity: {
        type: [String],
        required: true,
    },
    set: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        required: true,
    },
    power: {
        type: String,
    },
    toughness: {
        type: String,
    },
    loyalty: {
        type: String,
    },
    flavorText: {
        type: String,
    },
    artist: {
        type: String,
    },
    legalities: {
        type: Object,
        required: true,
    },
    prices: {
        type: Object,
        required: true,
    },
    rulings: {
        type: Array,
    },
    printings: {
        type: Array,
    },
    cardFaces: {
        type: Array,
    },
    keywords: {
        type: Array,
    },
});

const Card = mongoose.model('Card', cardSchema);

export default Card;