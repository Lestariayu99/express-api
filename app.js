const express = require('express')
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOptions = {
  origin: "*"
};


// register middleware
app.use(cors(corsOptions));
app.use(express.json());


// konek database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch(err => {
    console.log(`Gagal konek ${err.message}`);
    process.exit();
  });

// memanggil routes product
// app.get("/", (req, res) => {
//   res.json({message: "Hello Gabriel"});
// });
require("./app/routes/product.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server start on PORT ${PORT}`));



// cara menjalankan apk ini : node app / node app.js