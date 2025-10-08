export abstract class VM {
  protected ram: string
  protected vcpus: number

  constructor (ram: string, cpus: number) {
    this.ram = ram
    this.vcpus = cpus
  }

  // Getters
  getRam (): string {
    return this.ram
  }

  getCpus (): number {
    return this.vcpus
  }

  // Setters
  setRam (ram: string): void {
    this.ram = ram
  }

  setCpus (cpus: number): void {
    this.vcpus = cpus
  }
}
