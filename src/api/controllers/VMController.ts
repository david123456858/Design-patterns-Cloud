import { NextFunction, Request, Response } from 'express'
import { VMProvisioningService } from '../../application/services/VMProvisioningService'

export class VMController {
  constructor (private readonly VMService: VMProvisioningService) {
    this.provisionVM = this.provisionVM.bind(this)
  }

  public async provisionVM (req: Request, res: Response, next: NextFunction): Promise<void> {
    const dto = req.body

    const result = await this.VMService.provisionVM(dto)

    if (!result.success) {
      res.status(result.status).json({ error: result.error })
      return
    }
    res.status(result.status).json({ message: result.value })
  }

  public async getVMStatus (req: Request, res: Response, next: NextFunction): Promise<void> {

  }

  public async listVMs (req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({ message: 'Bueno al parecer si funciona' })
  }
}
