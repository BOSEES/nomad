export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const uproad = (req, res) => res.render("uproad");            //video 와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const videoDetail = (req, res) => res.render("videoDetail");  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");