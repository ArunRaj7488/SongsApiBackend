const express = require('express');
const cors = require('cors');
const app = express();
const {Song, validateSchema} = require('./db');

app.use(cors());

app.use(express.json());

app.get('/',  async(req, res) => {
	const song = await Song.find();
	res.send(song)
});

app.post('/',  async(req,res) =>{

		const { error } = validateSchema(req.body);
		if(error) return res.status(404).send(error.details[0].message);

		const songName = await Song.findOne({songName: req.body.songName});
		if(songName) return res.status(400).send('song is already exist');
		
		const song = new Song(req.body);
		await song.save(song);
		res.send(song);
})

port = process.env.PORT || 5000;
app.listen(port,() => console.log(`listning on port ${port}...`));