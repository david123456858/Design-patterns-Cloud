/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { AWSMachineType } from '../../../../common/enums/MachineTypes'
import { StatusResult } from '../../../../common/enums/StatusResult'
import { BuilderProviderVm } from '../../../../domain/interfaces/builderProvider'
import { ProvisionResult } from '../../../../domain/valueObjects/ProvisionResult'
import { AWSDisk } from '../Disk/AWSDisk'
import { AWSNetwork } from '../NetWork/AWSNetwork'
import { AWSvm } from '../VirtualMachine/AWSVm'

export class ConcreteAwsVm implements BuilderProviderVm {
  private vcpus!: number
  private memoryGB!: number
  private memoryOptimization!: boolean
  private diskOptimization!: boolean
  private keyPairName: string = 'default-key'
  private machineType!: AWSMachineType

  private readonly ami!: string

  private networkConfig!: AWSNetwork

  private diskConfig!: AWSDisk

  reset (): void {
    this.vcpus = 0
    this.memoryGB = 0
    this.memoryOptimization = false
    this.diskOptimization = false
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

  setNetworkConfig (net: any): void {
    this.networkConfig = net
  }

  setDiskConfig (disk: any): void {
    this.diskConfig = disk
  }

  configureProviderSpecific (properties: any): void {

  }

  getResult (): ProvisionResult {
    const IntanceVm = new AWSvm(
      this.vcpus,
      this.memoryGB,
      this.machineType,
      this.ami,
      this.networkConfig,
      this.diskConfig,
      this.memoryOptimization,
      this.diskOptimization,
      this.keyPairName)

    return new ProvisionResult(StatusResult.SUCCESS, IntanceVm, 'VM in Deployment...')
  }
}
