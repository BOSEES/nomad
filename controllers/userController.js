export const join = (req, res) => res.render("join", {PageTitle : "join"});
export const login = (req, res) => res.render("login", {PageTitle : "Login"});
export const logout = (req, res) => res.render("logout", {PageTitle : "Logout"});
export const users = (req, res) => res.render("users", {PageTitle : "Users"});             //user와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const userDetail = (req, res) => res.render("userDetail", {PageTitle : "UserDetail"});  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editProfile = (req, res) => res.render("userProfile", {PageTitle : "UserProfile"});
export const changePassword = (req, res) => res.render("changePassword", {PageTitle : "ChangePassword"});