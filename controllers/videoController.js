import {videosis} from "../db"
import routes from "../routes"

export const home = (req, res) => res.render("home", {PageTitle : "home", videosis});

export const search = (req, res) => {
    const {
        query: { term : searchingBy }
    } = req;
    res.render("search", {PageTitle : "Search", searchingBy,videosis});
}

export const videos = (req, res) =>
    res.render("videos", {PageTitle : "Videos"});

export const getUpload = (req, res) =>
    res.render("upload", {PageTitle : "Upload"});            //video 와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.

export const postUpload = (req, res) => {
    const { body : {file, title, description}} = req;
    //To Do : Upload and Save Video
    res.redirect(routes.videoDetail(432432));
}


export const videoDetail = (req, res) =>
     res.render("videoDetail", {PageTitle : "VideoDetail"});  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역

export const editVideo = (req, res) =>
    res.render("editVideo", {PageTitle : "EditVideo"});

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", {PageTitle : "DeleteVideo"});