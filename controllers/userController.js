import routes from "../routes";

export const getJoin = (req, res) => res.render("join", {PageTitle : "join"});
export const postJoin = (req, res) => {
    const {body : {name, email, password, password2}} = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", {PageTitle : "join"});
    } else {
        //To Do: Register User
        //To Do: Log User in
        res.redirect(routes.home);
    }
}
    
export const getLogin = (req, res) => res.render("login", {PageTitle : "Login"});
export const postLogin = (req, res) =>{
    res.redirect(routes.home);
}

export const logout = (req, res) =>{
    //To Do: Process log out
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", {PageTitle : "Users"});             //user와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const userDetail = (req, res) => res.render("userDetail", {PageTitle : "UserDetail"});  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editProfile = (req, res) => res.render("editProfile", {PageTitle : "editProfile"});
export const changePassword = (req, res) => res.render("changePassword", {PageTitle : "ChangePassword"});