import express, {Express} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import Http, {Server} from 'http';

export class App {
   private constructor(public readonly http: Server) {


   }

   static instance() {
      const app = express();

      app.use(express.json());

      app.use(cors({
        credentials: true,
        allowedHeaders: ['content-type'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        origin: true,

      }))

      app.use(cookieParser(process.env.SIGNATURE_COOKIE));

      const http = Http.createServer(app);
      return new App(http);
   }

}
