import { diskTypeGPC } from '../../../../common/enums/DiskTypes'
import { Disk } from '../../../../domain/entities/Disk'

export class GPCDisk extends Disk {
  private type: diskTypeGPC
  private autoDelete: boolean

  constructor (
    scale: string,
    sizeGB: number,
    type: diskTypeGPC,
    autoDelete: boolean
  ) {
    super(scale, sizeGB)
    this.type = type
    this.autoDelete = autoDelete
  }

  // Getters
  getType (): diskTypeGPC {
    return this.type
  }

  getAutoDelete (): boolean {
    return this.autoDelete
  }

  // Setters
  setType (type: diskTypeGPC): void {
    this.type = type
  }

  setAutoDelete (autoDelete: boolean): void {
    this.autoDelete = autoDelete
  }
}
