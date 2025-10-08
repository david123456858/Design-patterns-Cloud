export abstract class Disk {
  protected idDisk: string
  protected region: string
  protected sizeGB: number
  protected iops?: number

  constructor (
    idDisk: string,
    sizeGB: number,
    region: string,
    iops?: number
  ) {
    this.idDisk = idDisk
    this.sizeGB = sizeGB
    this.region = region
    this.iops = iops
  }

  // Getters
  getIdDisk (): string {
    return this.idDisk
  }

  getSizeGB (): number {
    return this.sizeGB
  }

  getRegion (): string {
    return this.region
  }

  getIops (): number | undefined {
    return this.iops
  }

  // Setters
  setIdDisk (id: string): void {
    this.idDisk = id
  }

  setSizeGB (sizeGB: number): void {
    this.sizeGB = sizeGB
  }

  setRegion (region: string): void {
    this.region = region
  }

  setIops (iops: number): void {
    this.iops = iops
  }
}
