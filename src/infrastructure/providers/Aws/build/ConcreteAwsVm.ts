/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { AWSMachineType } from '../../../../common/enums/MachineTypes'
import { BuilderProviderVm } from '../../../../domain/interfaces/builderProvider'
import { ProvisionResult } from '../../../../domain/valueObjects/ProvisionResult'

export class ConcreteAwsVm implements BuilderProviderVm {
  private vcpus!: number
  private memoryGB!: number
  private memoryOptimization!: boolean
  private diskOptimization!: boolean
  private keyPairName: string = 'default-key'
  private region!: string
  private machineType!: AWSMachineType

  private readonly ami!: string
  private readonly vpcId?: string

  private networkConfig?: {
    idNetwork: string
    securityPolicy: string
    vpcId: string
    subnet: string
    IdsecurityGroup: string
    firewallRules?: string[]
    publicIP?: boolean
  }

  private diskConfig?: {
    idDisk: string
    scale: string
    sizeGB: number
    type: string
    encrypted: boolean
    iops?: number
  }

  reset (): void {
    this.vcpus = 0
    this.memoryGB = 0
    this.memoryOptimization = false
    this.diskOptimization = false
    this.keyPairName = ''
    this.region = ''
    this.machineType = AWSMachineType.M5_LARGE
  }

  setVcpus (vcpus: number): void {
    this.vcpus = vcpus
  }

  setMemoryGB (memory: number): void {
    this.memoryGB = memory
  }

  setMemoryOptimization (hasMemoryOptimization: boolean): void {
    this.memoryOptimization = hasMemoryOptimization
  }

  setDiskOptimization (hasDiskOptimization: boolean): void {
    this.diskOptimization = hasDiskOptimization
  }

  setKeyPairName (Name: string): void {
    this.keyPairName = Name
  }

  setRegion (region: string): void {
    this.region = region
  }

  setNetworkConfig (net: any): void {
    this.networkConfig = net
  }

  setDiskConfig (disk: any): void {
    this.diskConfig = disk
  }

  getResult (): ProvisionResult {
    return {} as ProvisionResult
  }
}
