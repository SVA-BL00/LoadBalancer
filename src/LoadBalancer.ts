import { Server } from "./models/Server"
import { Subject } from "./patterns/Observer"

// Se implementa el Round Robin, tomándose el servidor siguiente.
export class LoadBalancer extends Subject{
    private servers: Server[];
    private curr: number = 0;

    constructor(servers: Server[]){
        super();
        this.servers = servers;
    }

    public distributeRequest(): void{
        if(this.servers.length === 0) return;

        const server = this.servers[this.curr];

        server.handleRequest();
        this.notifyObservers(server.name);

        this.curr = (this.curr + 1) % this.servers.length;
    }
}