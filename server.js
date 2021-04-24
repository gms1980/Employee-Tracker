const express = require('express');

const PORT = process.env.PORT || 3004;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());




//Default response for any other request (NOT Found) this should be last placement or it will ove ride all others
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});