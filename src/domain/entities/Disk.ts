export abstract class Disk {
  protected scale: string
  protected sizeGB: number

  constructor (scale: string, sizeGB: number) {
    this.scale = scale
    this.sizeGB = sizeGB
  }

  // Getters
  getScale (): string {
    return this.scale
  }

  getSizeGB (): number {
    return this.sizeGB
  }

  // Setters
  setScale (scale: string): void {
    this.scale = scale
  }

  setSizeGB (sizeGB: number): void {
    this.sizeGB = sizeGB
  }
}
