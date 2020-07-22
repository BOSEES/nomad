import express from "express"; // express REST API를 사용하기 위해서 일단 express 를 require 한 express 함수를 만듬
import routes from "../routes"; // url를 정의한 object(객체)를 만들어논 파일 경로이다. 라우팅 경로의 핵심이다.
import {home, search} from "../controllers/videoController"; // 경로에 home 과 search를 가져오고 있음
import {join, login, logout} from "../controllers/userController";  //경로에 join, login, logout를 가져오고 있음

const globalRouter = express.Router(); // globalRouter 라는 상수에 express.Router()메소드를 사용하요 대입함.

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);     // express 에서 제공하는 REST API .get()이라는 메소드를 이용해 url 경로를 지정하고 있다. 즉
globalRouter.get(routes.search, search);    // url 경로에 데이터들을 가져오겠다는 말이다.
globalRouter.get(routes.logout, logout);

export default globalRouter; //export 로 라우팅를 할수있게 문을 열어두고 default 값으로 전역으로 globalRouter export 하겠다는 말임.