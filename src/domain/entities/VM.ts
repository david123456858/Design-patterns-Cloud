export abstract class VM {
  protected ram: string
  protected cpus: string
  protected disk: string

  constructor (ram: string, cpus: string, disk: string) {
    this.ram = ram
    this.cpus = cpus
    this.disk = disk
  }

  // Getters
  getRam (): string {
    return this.ram
  }

  getCpus (): string {
    return this.cpus
  }

  getDisk (): string {
    return this.disk
  }

  // Setters
  setRam (ram: string): void {
    this.ram = ram
  }

  setCpus (cpus: string): void {
    this.cpus = cpus
  }

  setDisk (disk: string): void {
    this.disk = disk
  }
}
