// Patrón Chain Handler que puede manejar o log in o authentication
export abstract class ChainHandler{
    private nextHandler: ChainHandler | null = null;
    public setNext(handler: ChainHandler): ChainHandler{
        this.nextHandler = handler;
        return handler;
    }

    public handler(requestType: number): void{
        if(this.nextHandler){
            this.nextHandler.handler(requestType);
        }
    }
}

export class AuthenticationHandler extends ChainHandler{
    public handle(requestType: number): void{
        if(requestType === 1){
            console.log("AuthenticationHandler: Resolved request");
        }else{
            super.handler(requestType);
        }
    }
}

export class LogInHandler extends ChainHandler{
    public handle(requestType: number): void{
        if(requestType === 2){
            console.log("LogInHandler: Resolved request");
        }else{
            super.handler(requestType);
        }
    }
}