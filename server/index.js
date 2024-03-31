const express = require("express");
const fs = require('fs');
const path = require('path');
const port =5000;
const app = express();
// const diaryApp = require('./routes/diary');
const cors = require('cors');
app.use(cors(
    {
        origin:"https://vercel-frontend-five.vercel.app/space",
        methods: ['GET','POST','PUT','DELETE'],
        credentials:true
    }
));
app.use(express.json())

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/diaryApp').then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.log('Failed to connect to MongoDB', err);
// });
// const users=[{"one":1}]
// app.get('/', (req, res) => {
//     // res.send(`Hello on port ${port}`)
//     res.json(users)
// }); 

//setting file path and name
app.post('/', async (req, res) => {
    try {
        const { date, title, content } = req.body; 
        const currentDate = new Date();
        const filename = `${req.body.title}-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}-.txt`;
        const filePath = path.join(__dirname, 'diary', filename);

        if (!fs.existsSync(path.join(__dirname, 'diary'))) {
            fs.mkdirSync(path.join(__dirname, 'diary'));
        }
        fs.writeFileSync(filePath, `Date: ${date}\nTitle: ${title}\nContent:\n${content}`);
        res.status(201).json({ message: 'Diary entry saved successfully', filename });
        } 
    catch (error) {

  console.log('Error saving diary entry:', error);
  res.status(500).json({ message: 'Failed to save diary entry.... ' });
}
});
// app.use('/', diaryApp);
app.get('/', (req, res) =>{
    res.send('Hello world');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
