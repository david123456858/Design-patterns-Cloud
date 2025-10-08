import { volumeTypeAWS } from '../../../../common/enums/DiskTypes'
import { Disk } from '../../../../domain/entities/Disk'

export class AWSDisk extends Disk {
  private type: volumeTypeAWS
  private encrypted: boolean

  constructor (
    idDisk: string,
    sizeGB: number,
    region: string,
    type: volumeTypeAWS,
    encrypted: boolean,
    iops?: number
  ) {
    super(idDisk, sizeGB, region, iops)
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
