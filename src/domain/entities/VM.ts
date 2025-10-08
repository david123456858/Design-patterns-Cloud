export abstract class VM {
  protected vcpus: number
  protected memoryGB: number
  protected memoryOptimization: boolean
  protected diskOptimization: boolean
  protected keyPairName: string
  protected region: string

  constructor (
    vcpus: number,
    memoryGB: number,
    memoryOptimization: boolean = false,
    diskOptimization: boolean = false,
    keyPairName: string = '',
    region: string = ''
  ) {
    this.vcpus = vcpus
    this.memoryGB = memoryGB
    this.memoryOptimization = memoryOptimization
    this.diskOptimization = diskOptimization
    this.keyPairName = keyPairName
    this.region = region
  }

  // Getters
  getVcpus (): number {
    return this.vcpus
  }

  getMemoryGB (): number {
    return this.memoryGB
  }

  getMemoryOptimization (): boolean {
    return this.memoryOptimization
  }

  getDiskOptimization (): boolean {
    return this.diskOptimization
  }

  getKeyPairName (): string {
    return this.keyPairName
  }

  getRegion (): string {
    return this.region
  }

  // Setters
  setVcpus (vcpus: number): void {
    this.vcpus = vcpus
  }

  setMemoryGB (memoryGB: number): void {
    this.memoryGB = memoryGB
  }

  setMemoryOptimization (memoryOptimization: boolean): void {
    this.memoryOptimization = memoryOptimization
  }

  setDiskOptimization (diskOptimization: boolean): void {
    this.diskOptimization = diskOptimization
  }

  setKeyPairName (keyPairName: string): void {
    this.keyPairName = keyPairName
  }

  setRegion (region: string): void {
    this.region = region
  }
}
