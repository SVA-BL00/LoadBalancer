// Patrón observer con el que notifica qué request está siendo manejado por qué server.
export interface Observer{
    update(serverName: string): void;
}

export class Logger implements Observer{
    public update(serverName: string): void{
        console.log("Logger: Request handled by server: " + serverName);
    }
}

export class Subject{
    private observer: Observer[] = [];

    public addObserver(observer: Observer): void{
        this.observer.push(observer);
    }

    public notifyObservers(serveName: string): void {
        this.observer.forEach((observer) => observer.update(serveName));
    }
}