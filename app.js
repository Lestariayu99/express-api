const express = require('express')
const cors = require("cors")

const app = express();

const corsOptions = {
  origin: "*"
};


// register middleware
app.use(cors(corsOptions));
app.use(express.json());

// membuat routes
app.get("/", (req, res) => {
  res.json({message: "Hello Gabriel"});
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server start on PORT ${PORT}`));



// cara menjalankan apk ini : node app