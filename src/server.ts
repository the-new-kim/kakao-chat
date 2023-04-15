import express from "express";
import http from "http";
import morgan from "morgan";
import session from "express-session";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.use(logger);

app.use("/static", express.static("assets"));
app.use(express.urlencoded({ extended: true })); //

app.use(express.json());

// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
//     // store: MongoStore.create({ client: connection.client }),
//   })
// );

app.use("/", (req, res) => {
  return res.render("index", { siteTitle: "hello" });
});

const httpServer = http.createServer(app);

export default httpServer;
