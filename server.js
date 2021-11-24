const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const pageRoutes = require('./routes/pageRoutes')
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use(express.static('public'));
app.use('/', apiRoutes);
app.use('/', pageRoutes);

app.listen(PORT, () => {
    console.log(`API server is listening on port ${PORT}!`);
});