export abstract class VM {
  protected ram: string
  protected cpus: string

  constructor (ram: string, cpus: string) {
    this.ram = ram
    this.cpus = cpus
  }

  // Getters
  getRam (): string {
    return this.ram
  }

  getCpus (): string {
    return this.cpus
  }

  // Setters
  setRam (ram: string): void {
    this.ram = ram
  }

  setCpus (cpus: string): void {
    this.cpus = cpus
  }
}
