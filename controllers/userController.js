export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("users");             //user와 관련된 기능들을 컨트롤하기위한 컨트롤러를 모아놓은 곳임.
export const userDetail = (req, res) => res.send("user_datail");  //MODEL VIEW CONTROLLER (줄임말 MVC) 중 CONTROLLER 에 해당하는 영역
export const editProfile = (req, res) => res.send("user-profile");
export const changePassword = (req, res) => res.send("change-password");