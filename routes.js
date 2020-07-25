// global

const home = "/";
const join = "/join";
const login = "/login";
const logout = "/logout";
const search = "/search";

// users

const users = "/users";
const userDetail = "/:id";
const editProfile = "/edit-profile";
const changePassword = "/change-password";

// videos

const videos = "/videos";
const uproad = "/uproad";
const videoDetail = "/:id";
const editVideo = "/:id/edit";
const deleteVideo ="/:id/delete";

const routes = {
    home: home,
    join: join, 
    login: login,
    logout: logout,
    search: search,
    users: users,
    userDetail: userDetail,
    editProfile: editProfile,
    changePassword: changePassword,
    videos: videos,
    uproad: uproad,
    videoDetail: videoDetail,
    editVideo: editVideo,
    deleteVideo: deleteVideo,
}

export default routes;