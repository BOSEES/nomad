import multer from "multer";
import routes from "./routes";
//  locals() 메소드는 express 에서 제공하는 함수입니다. 전역으로 라우팅을 설정할수있는 메소드입니다.
const multerVideo = multer({dest: "uploads/videos"});

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1,
    }
    next();
}

export const uploadVideo = multerVideo.single("videoFile");