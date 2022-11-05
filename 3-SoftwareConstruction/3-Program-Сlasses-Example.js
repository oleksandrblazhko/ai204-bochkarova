import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
    id: int,
    email: String,
    sleep_score: int
});

const Sleep = new Schema({
    id: int,
    user: User.id,
    date: String,
    duration: int,
    coffeine: Boolean
})

module.export = User, Sleep
