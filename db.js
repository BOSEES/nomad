import mongoose from "mongoose"; //몽고디비가 nodejs의 javascript를 이해할수있도록 해준다.
import dotenv from "dotenv"; //env를 사용해서 중요한 키를 private 하게 만들어줌
import "./models/Video";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,  //일단 그냥 쓰자.
});

const db = mongoose.connection;

const handleOpen = () => conesole.log("connection MongoDB");
const handleError = (error) => console.log(`Error Connection MongoDB:${error}`);

db.once("open", handleOpen);
db.on("error",handleError);