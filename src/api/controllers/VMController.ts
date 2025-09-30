import { NextFunction, Request, Response } from 'express'
import { VMProvisioningService } from '../../application/services/VMProvisioningService'

export class VMController {
  constructor (private readonly VMService: VMProvisioningService) {}

  public async provisionVM (req: Request, res: Response, next: NextFunction): Promise<void> {

  }

  public async getVMStatus (req: Request, res: Response, next: NextFunction): Promise<void> {

  }

  public async listVMs (req: Request, res: Response, next: NextFunction): Promise<void> {

  }
}
