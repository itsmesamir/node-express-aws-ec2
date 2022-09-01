import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
  application,
} from "express";
import createHttpError from "http-errors";
import { config } from "dotenv";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

config();

app.get("/", (req, res) => {
  res.send(
    `<H1>Hello World this is Samir Alam.</H1> <H1>Hosting from AWS EC2.</H1>`
  );
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.warn("not found", req.url);
  next(new createHttpError.NotFound());
});

const PORT = Number(process.env.PORT);

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
