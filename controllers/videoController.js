export const home = (req, res) => res.send("home");
export const search = (req, res) => res.send("search");
export const videos = (req, res) => res.send("videos");
export const uproad = (req, res) => res.send("uproad");            //video 와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const videoDetail = (req, res) => res.send("video-detail");  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editVideo = (req, res) => res.send("edit-video");
export const deleteVideo = (req, res) => res.send("delete-video");