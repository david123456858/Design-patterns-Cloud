import { Router } from 'express';
import { VMRoutes } from './vm.routes';

export class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.configureRoutes();
    }

    private configureRoutes(): void {
        // Montamos las rutas de VM en /api/v1/vm
        const vmRoutes = new VMRoutes();
        this.router.use('/v1/vm', vmRoutes.router);
    }
}