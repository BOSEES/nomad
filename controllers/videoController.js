import Video from "../models/Video";
import routes from "../routes";


export const home = async(req, res) =>{
        try { //async 와 await 는 한쌍이다 무조건 같이 써야함. await이 들어가면 이 스크립트가 완전히 실행되고나서 다음이 실행 된다.
            const videosis = await Video.find({});
            res.render("home", {PageTitle : "home", videosis});
        } catch (error) {
            console.log(error);
            res.render("home", {PageTitle : "home", videosis});
        }
    }

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

export const postUpload = async(req, res) => {
    const { 
        body: {title, description},
        file: {path}
    } = req;
    //To Do : Upload and Save Video
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
    });
    res.redirect(routes.videoDetail(newVideo.id));
}


export const videoDetail = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {PageTitle:"Video Detail", video});
    } catch (error) {
        res.render(routes.home);
    }
}

export const getEditVideo = async(req, res) => {
    const {
        params:{id},
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", {PageTitle: `Edit ${video.title}`, video});
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async(req, res) => {
    const {
        params: {id},
        body:{title,description},
    } = req;
    try {
        await Video.findByIdAndUpdate({id},{title,description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
}

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", {PageTitle : "DeleteVideo"});