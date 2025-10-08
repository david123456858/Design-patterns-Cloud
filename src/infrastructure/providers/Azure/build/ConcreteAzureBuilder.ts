import { AzureMachineType } from '../../../../common/enums/MachineTypes'
import { StatusResult } from '../../../../common/enums/StatusResult'
import { BuilderProviderVm } from '../../../../domain/interfaces/builderProvider'
import { ProvisionResult } from '../../../../domain/valueObjects/ProvisionResult'
import { AzureDisk } from '../Disk/AzureDisk'
import { AzureNetwork } from '../Network/AzureNetwork'
import { Azurevm } from '../VirtualMachine/AzureVm'

export class ConcreteAzureBuilder implements BuilderProviderVm {
  private vcpus!: number
  private memoryGB!: number
  private memoryOptimization!: boolean
  private diskOptimization!: boolean
  private keyPairName: string = 'default-key'
  private machineType!: AzureMachineType
  private _resourceGroup!: string
  private _redVital!: string

  private networkConfig!: AzureNetwork

  private diskConfig!: AzureDisk

  reset (): void {
    this.vcpus = 0
    this.memoryGB = 0
    this.memoryOptimization = false
    this.diskOptimization = false
    this.machineType = AzureMachineType.D2S_V3
  }

  setTypeMachine (type: AzureMachineType): void {
    this.machineType = type
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
    this._redVital = properties.redVital
    this._resourceGroup = properties.resourceGroup
  }

  getResult (): ProvisionResult {
    const IntanceVm = new Azurevm(
      this.vcpus,
      this.memoryGB,
      this.machineType,
      this._resourceGroup,
      this._redVital,
      this.networkConfig,
      this.diskConfig,
      this.memoryOptimization,
      this.diskOptimization,
      this.keyPairName
    )

    return new ProvisionResult(StatusResult.SUCCESS, IntanceVm, 'VM in Deployment...')
  }
}
