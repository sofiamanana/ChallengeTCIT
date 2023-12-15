const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const routerAPI = require('./routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Backend');
});

routerAPI(app);

app.listen(port,() => {
    console.log('Port ==> "', port);
});

//app.use('/posts', postRoutes);

