const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = express();
app.use(express.json())
dotenv.config();//ต้องเรียกใช้.env
// ConnectDB
mongoose.connect(process.env.MONGO_DB_URI, {
}).then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));

//config Route
const roomRoutes = require("./routes/rooms");
const authRoute = require("./routes/auth");
const dataroomRoute = require("./routes/dataroom_routes");
const datatoolRoute = require("./routes/datatool_routes");

app.use("/api/dr",dataroomRoute);
app.use("/api/dt",datatoolRoute);
app.use("/api/",roomRoutes);
app.use("/api/auth",authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));