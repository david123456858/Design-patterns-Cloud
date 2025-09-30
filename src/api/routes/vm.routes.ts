import { Router } from 'express'
import { VMController } from '../controllers/VMController'
import { VMProvisioningService } from '../../application/services/VMProvisioningService'
import { validateDto } from '../middlware/validateDto'
import { ProvisionRequestDTO } from '../dto/VM/provisioning'

export class VMRoutes {
  public router: Router
  private readonly vmController: VMController

  constructor () {
    this.router = Router()
    const vmService = new VMProvisioningService()
    this.vmController = new VMController(vmService)
    this.configureRoutes()
  }

  private configureRoutes (): void {
    // Ruta para aprovisionar una nueva VM
    this.router.post('/provision', validateDto(ProvisionRequestDTO), this.vmController.provisionVM)

    // Ruta para obtener el estado de una VM
    this.router.get('/:id/status', this.vmController.getVMStatus)

    // Ruta para listar todas las VMs
    this.router.get('/', this.vmController.listVMs)
  }
}
