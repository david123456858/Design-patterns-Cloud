import { DiskSku } from '../../../../common/enums/DiskTypes'
import { Disk } from '../../../../domain/entities/Disk'

export class AzureDisk extends Disk {
  private type: DiskSku
  private autoDelete: boolean

  constructor (
    scale: string,
    sizeGB: number,
    type: DiskSku,
    autoDelete: boolean
  ) {
    super(scale, sizeGB)
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
