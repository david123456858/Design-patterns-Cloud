import { volumeTypeAWS } from '../../../../common/enums/DiskTypes'
import { Disk } from '../../../../domain/entities/Disk'

export class AWSDisk extends Disk {
  private type: volumeTypeAWS
  private encrypted: boolean

  constructor (
    scale: string,
    sizeGB: number,
    type: volumeTypeAWS,
    encrypted: boolean
  ) {
    super(scale, sizeGB)
    this.type = type
    this.encrypted = encrypted
  }

  // Getters
  getType (): volumeTypeAWS {
    return this.type
  }

  getEncrypted (): boolean {
    return this.encrypted
  }

  // Setters
  setType (type: volumeTypeAWS): void {
    this.type = type
  }

  setEncrypted (encrypted: boolean): void {
    this.encrypted = encrypted
  }
}
