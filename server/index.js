const express = require("express");
const fs = require('fs');
const path = require('path');
const port = 5000;
const app = express();
const cors = require('cors');
const CryptoJS = require('crypto-js'); 

app.use(cors({
  // origin: "http://localhost:5173/space",
  // methods: ['GET', 'POST'],
  // credentials: true
}));
app.use(express.json())
app.post('/', async (req, res) => {
  try {
    const { date, title, entry, enKey } = req.body;
    console.log(enKey,entry);
    if (!enKey) {
      return res.status(400).json({ message: 'Encryption key is required' });
    }

    const currentDate = new Date();
    const filename = `${req.body.title}-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}-.txt`;
    const filePath = path.join(__dirname, 'diary', filename);

    if (!fs.existsSync(path.join(__dirname, 'diary'))) {  
      fs.mkdirSync(path.join(__dirname, 'diary'));
    }

    // Decrypt the diary entry
    const decryptedEntry = CryptoJS.AES.decrypt(entry, enKey).toString(CryptoJS.enc.Utf8);

    fs.writeFileSync(filePath, `Date: ${date}\nTitle: ${title}\nContent:\n${decryptedEntry}`);
    res.status(201).json({ message: 'Diary entry saved successfully', filename });
  } catch (error) {
    console.log('Error saving diary entry:', error);
    res.status(500).json({ message: 'Failed to save diary entry. Please try again later.' });
  }
});

// app.get('/', (req, res) => {
//   res.send('Hello world');
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});