const Joi = require('joi');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arun:arun@cluster0-wziy9.mongodb.net/Songs?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(() => console.log('connected to mongodb'))
.catch(err => console.log('mongodb not connected ...', err));

const createSchema = new mongoose.Schema({
	songName: String,
	artist: String,
	movie: String,
	year: Number
});

const Song = mongoose.model("Song", createSchema);

function validateSchema(song) {
	const shema = {
		songName: Joi.string().required(),
		artist: Joi.string().required(),
		movie: Joi.string().required(),
		year: Joi.string().required(),
	}
	Joi.validate(song, validateSchema)
}
exports.validateSchema = validateSchema;
exports.Song = Song;