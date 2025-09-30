import { NextFunction, Request, Response } from 'express'
import { VMProvisioningService } from '../../application/services/VMProvisioningService'

export class VMController {
  constructor (private readonly VMService: VMProvisioningService) {}

  public async provisionVM (req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({ message: req.body })
  }

  public async getVMStatus (req: Request, res: Response, next: NextFunction): Promise<void> {

  }

  public async listVMs (req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({ message: 'Bueno al parecer si funciona' })
  }
}
