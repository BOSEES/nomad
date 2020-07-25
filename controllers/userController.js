export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const users = (req, res) => res.render("users");             //user와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const userDetail = (req, res) => res.render("userDatail");  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editProfile = (req, res) => res.render("userProfile");
export const changePassword = (req, res) => res.render("changePassword");