import { ServerCustom } from "./server";


class Main {

   constructor(private readonly server: ServerCustom) { }

   inicialize() {
      this.server.inicialize();
   }
}


const server = ServerCustom.instance();
const main = new Main(server);


main.inicialize();
