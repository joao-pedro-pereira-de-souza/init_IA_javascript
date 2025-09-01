import {Server} from 'http'

import { App } from './app';

export class ServerCustom {

   constructor(private readonly http: Server) { }

   static instance() {
      const app = App.instance();


      return new ServerCustom(app.http);
   }


   inicialize() {

      const port = process.env.PORT || 3000;

      this.http.listen(port,  this.listener)
   }

   private listener(teste?: any) {

      console.log('Server is running on port ');
   }

}
