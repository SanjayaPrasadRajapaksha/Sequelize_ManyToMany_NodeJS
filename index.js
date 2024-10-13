import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from "./Models/index.js";
import dotenv from "dotenv";
import courseRoutes from './Routes/course.routes.js';
import userRoutes from './Routes/user.routes.js';
import enrollmentRoutes from './Routes/enrollment.routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});



app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type", "content-type: multipart/form-data");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

db.sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

db.sequelize.sync({ force: false }).then(() => {
    console.log("Database synced.");
    app.listen(3000, () => {
        console.log("Server is running on port 3000.");
    });
});


app.use('/api', courseRoutes);
app.use('/api', userRoutes);
app.use('/api', enrollmentRoutes);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});