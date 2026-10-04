import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post' },
    { id: 2, title: 'Second Post', content: 'This is the second post' },
    { id: 3, title: 'Third Post', content: 'This is the third post' },
    { id: 4, title: 'Fourth Post', content: 'This is the fourth post' },
    { id: 5, title: 'Fifth Post', content: 'This is the fifth post' }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});