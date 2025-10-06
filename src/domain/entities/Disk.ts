export abstract class Disk {
  protected idDisk: string
  protected scale: string
  protected sizeGB: number

  constructor (id: string, scale: string, sizeGB: number) {
    this.scale = scale
    this.sizeGB = sizeGB
    this.idDisk = id
  }

  // Getters
  getScale (): string {
    return this.scale
  }

  getSizeGB (): number {
    return this.sizeGB
  }

  getIdDisk (): string {
    return this.idDisk
  }

  setIdDisk (id: string): void {
    this.idDisk = id
  }

  // Setters
  setScale (scale: string): void {
    this.scale = scale
  }

  setSizeGB (sizeGB: number): void {
    this.sizeGB = sizeGB
  }
}
