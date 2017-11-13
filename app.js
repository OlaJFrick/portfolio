const express = require('express');
const app = express();

app.get('*', (req,res) => res.send('Olas uppdaterade Portfolio'));

app.listen(80, () => console.log('Listening on Post 80'));
