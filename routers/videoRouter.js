import express from "express";
import routes from "../routes";
import {videos, uproad, videoDetail, editVideo, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uproad, uproad);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;