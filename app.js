import express from "express"; // express 라는 함수에 require 를 통해 node js 프레임워크 express를 요청해서 대입하였음. express를 사용하기 위한 방법임.
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import {localsMiddleWare} from "./localsMiddleWare";
import routes from "./routes";

const app = express(); //express()함수를 를 상수 app에 대입함. 거의 공식과도 같은 룰이다
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));// express.static() 을 이용해 디렉토리에다가 file을 보내주는 미들웨어다.
app.use(helmet());  // 보안의 용이한 미들웨어다. 서버를 구축하기 전에 무조건 곁들여주면 좋다.
app.use(bodyParser.json());   // 사용자가 웹사이트로 전달하는 정보를 검사하는 미들웨어이다. requsest 정보에서 form 이나 json 형태로 된 body를 검사함
app.use(bodyParser.urlencoded({extended: true})); // 사용자가 웹사이트로 전달하는 정보를 검사하는 미들웨어이다. requsest 정보에서 form 이나 json 형태로 된 body를 검사함
app.use(cookieParser()); // 쿠키를 전달받아서 사용할수 있도록 하는 미들웨어이다. 사용자 인증같은곳에서 쿠키를 검사할때 사용하기때문이다.
app.use(morgan("dev")); // application에서 발생하는 모든 일들을 logging 하는 미들웨어이다.
app.use(localsMiddleWare); //글로벌 영역으로 라우츠를 제어하기위해 미들웨어를 자체로 제작하였습니다.


app.use(routes.home, globalRouter); 
app.use(routes.users, userRouter);      //3개의 라우터 경로를 가지고있다. globalRouter, userRouter, videoRouter (이것의 경로는 위에 import 가 지정하고 있다.)
app.use(routes.videos, videoRouter);    

export default app; //라우팅을 하기위해선 문을 열어 놔야하는데 defualt 값을 줌으로써 app 와 관련된 모든것을 라우팅할수있도록 지정했다.