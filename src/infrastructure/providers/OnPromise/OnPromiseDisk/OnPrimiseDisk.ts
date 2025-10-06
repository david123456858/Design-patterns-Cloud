import { Disk } from '../../../../domain/entities/Disk'

export class OnPromiseDisk extends Disk {
  private storagePoo: string
  private raidLevel: string

  constructor (
    scale: string,
    sizeGB: number,
    storagePoo: string,
    raidLevel: string
  ) {
    super(scale, sizeGB)
    this.storagePoo = storagePoo
    this.raidLevel = raidLevel
  }

  // Getters
  getStoragePoo (): string {
    return this.storagePoo
  }

  getRaidLevel (): string {
    return this.raidLevel
  }

  // Setters
  setStoragePoo (storagePoo: string): void {
    this.storagePoo = storagePoo
  }

  setRaidLevel (raidLevel: string): void {
    this.raidLevel = raidLevel
  }
}
