import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { text } from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
const port = 3333;

const handleListening = () => console.log(`port http://localhost:${port}`);
const handleHome = (req, res) => res.send("wellcome to my home");
const handleProfile = (req, res) => res.send("wellcome to my profile");

app.use(helmet());  // 보안의 용이한 미들웨어다. 서버를 구축하기 전에 무조건 곁들여주면 좋다.
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded([text]));
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile",handleProfile);

app.listen(port, handleListening);