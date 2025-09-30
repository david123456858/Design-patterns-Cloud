import { Router } from 'express';
import { VMController } from '../controllers/VMController';
import { VMProvisioningService } from '../../application/services/VMProvisioningService';

export class VMRoutes {
    public router: Router;
    private vmController: VMController;

    constructor() {
        this.router = Router();
        const vmService = new VMProvisioningService();
        this.vmController = new VMController(vmService);
        this.configureRoutes();
    }

    private configureRoutes(): void {
        // Ruta para aprovisionar una nueva VM
        this.router.post('/provision', (req, res) => 
            this.vmController.provisionVM(req, res));

        // Ruta para obtener el estado de una VM
        this.router.get('/:id/status', (req, res) => 
            this.vmController.getVMStatus(req, res));

        // Ruta para listar todas las VMs
        this.router.get('/', (req, res) => 
            this.vmController.listVMs(req, res));
    }
}