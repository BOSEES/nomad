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
const upload = "/upload";
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
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return userDetail;
        }
    },
    editProfile: editProfile,
    changePassword: changePassword,
    videos: videos,
    upload: upload,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return videoDetail;
        }
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return editVideo;
        }
    },
    deleteVideo: deleteVideo,
};

export default routes;
