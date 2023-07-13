const express = require('express');
const connectToDatabase = require('./dbConnection');

const app = express();

app.use(express.json());

connectToDatabase()
  .then((db) => {
    // Anda dapat menggunakan objek db di sini untuk operasi database

    // Contoh: Menjalankan server Express.js di port tertentu
    app.listen(3000, () => {
      console.log('Server berjalan pada port 3000');
    });
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
