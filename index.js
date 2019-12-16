const express = require('express');
const cors = require('cors');
const app = express();
const { Song } = require('./db');

app.use(cors());

app.use(express.json());

app.get('/',  async(req, res) => {
	const song = await Song.find();
	res.send(song)
});

app.post('/', async(req,res) =>{
		try{

		const song = new Song(req.body);
		await song.save(song);
		res.send(song);
		}catch(ex){
			res.send({ex})
		}
})

port = process.env.PORT || 5000;
app.listen(port,() => console.log(`listning on port ${port}...`));