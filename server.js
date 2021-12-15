import express from 'express';

const app=express();
const PORT = 5000;




app.listen(PORT, (req, res) => {
    console.log(`API listening on port http://localhost:${PORT}`);
  });