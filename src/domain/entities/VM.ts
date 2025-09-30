export abstract class VM {
  protected ram: string
  protected cpus: string
  protected disk: string

  constructor (ram: string, cpus: string, disk: string) {
    this.ram = ram
    this.cpus = cpus
    this.disk = disk
  }
}
