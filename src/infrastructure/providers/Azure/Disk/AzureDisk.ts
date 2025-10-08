import { DiskSku } from '../../../../common/enums/DiskTypes'
import { Disk } from '../../../../domain/entities/Disk'

export class AzureDisk extends Disk {
  private type: DiskSku
  private autoDelete: boolean

  constructor (
    idDisk: string,
    sizeGB: number,
    region: string,
    type: DiskSku,
    autoDelete: boolean,
    iops?: number
  ) {
    super(idDisk, sizeGB, region, iops)
    this.type = type
    this.autoDelete = autoDelete
  }

  // Getters
  getType (): DiskSku {
    return this.type
  }

  getAutoDelete (): boolean {
    return this.autoDelete
  }

  // Setters
  setType (type: DiskSku): void {
    this.type = type
  }

  setAutoDelete (autoDelete: boolean): void {
    this.autoDelete = autoDelete
  }
}
