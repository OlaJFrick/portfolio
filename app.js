const express = require('express');
const app = express();

app.use(express.static('./www'));
app.get('*', (req,res) => res.send('Olas uppdaterade Portfolio'));

app.listen(3000, () => console.log('Listening on Post 3000'));
