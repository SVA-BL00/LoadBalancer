import { LoadBalancer } from "./LoadBalancer";
import { ServerFactory } from "./models/ServerFactory";
import { Logger } from "./patterns/Observer";

const main = () =>{
    const factory = ServerFactory.getInstance();
    const server1 = factory.createServer("Server 1");
    const server2 = factory.createServer("Server 2");
    const server3 = factory.createServer("Server 3");

    const loadBalancer = new LoadBalancer(factory.getServers());

    const logger = new Logger();
    loadBalancer.addObserver(logger);

    console.log("Distributing requests:");
    loadBalancer.distributeRequest();
    loadBalancer.distributeRequest();
    loadBalancer.distributeRequest();
    loadBalancer.distributeRequest();
}

main();