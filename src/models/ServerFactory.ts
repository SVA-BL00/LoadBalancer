import { Server } from "./Server";

export class ServerFactory{
    private static instance: ServerFactory;
    private servers: Server[] = [];

    private constructor(){}

    public static getInstance(): ServerFactory{
        if(!ServerFactory.instance){
            ServerFactory.instance = new ServerFactory();
        }

        return ServerFactory.instance;
    }

    // Patrón Factory
    public createServer(name: string): Server{
        const server = new Server(name);
        this.servers.push(server);

        return server;
    }

    public getServers(): Server[]{
        return this.servers;
    }
}