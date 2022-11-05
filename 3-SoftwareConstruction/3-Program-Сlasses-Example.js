import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
    id: int,
    email: String,
    sleep_score: int
});

const Dev = new Schema({
    user: User.id
});

const Sleep = new Schema({
    id: int,
    user: User.id,
    date: String,
    duration: int,
    coffeine: Boolean
})

const Review = new Schema({
    id: int,
    rating: int,
    comment: String
})

module.export = User, Sleep, Review, Dev
