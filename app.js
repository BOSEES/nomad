import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { text } from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/useRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());  // 보안의 용이한 미들웨어다. 서버를 구축하기 전에 무조건 곁들여주면 좋다.
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded([text]));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/video", videoRouter);
app.use("/global", globalRouter);

export default app;