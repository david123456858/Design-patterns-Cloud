export enum StatusResult {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export class ProvisionResult {
    private status: StatusResult;
    private vm: any; // Aquí deberíamos usar el tipo VM pero lo mantenemos any por ahora
    private message: string;

    constructor(status: StatusResult, vm: any, message: string) {
        this.status = status;
        this.vm = vm;
        this.message = message;
    }

    getStatus(): StatusResult {
        return this.status;
    }

    getVM(): any {
        return this.vm;
    }

    getMessage(): string {
        return this.message;
    }
}