import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Video";

dotenv.config();

const port = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${port}`);

app.listen(port,handleListening);