import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {userRouter} from "./router";
const app = express();


const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");


// middleware은 시작과 끝 사이에 위차한다.
// next라는 것을 가진다.
// 마지막에 next()를 써주지 않으면 끝단에 도착하지 않는다.
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
export default app;