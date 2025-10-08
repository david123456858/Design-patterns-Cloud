import { AzureMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'
import { AzureDisk } from '../Disk/AzureDisk'
import { AzureNetwork } from '../Network/AzureNetwork'

export class Azurevm extends VM {
  private _type: AzureMachineType
  private _resourceGroup: string
  private _redVital: string
  private readonly network: AzureNetwork
  private readonly disk: AzureDisk

  constructor (
    vcpus: number,
    memoryGB: number,
    type: AzureMachineType,
    resourceGroup: string,
    redVital: string,
    network: AzureNetwork,
    disk: AzureDisk,
    memoryOptimization: boolean = false,
    diskOptimization: boolean = false,
    keyPairName: string = ''
  ) {
    super(vcpus, memoryGB, memoryOptimization, diskOptimization, keyPairName)
    this._type = type
    this._resourceGroup = resourceGroup
    this._redVital = redVital
    this.network = network
    this.disk = disk
  }

  // Getter y Setter de type
  public get type (): AzureMachineType {
    return this._type
  }

  public set type (value: AzureMachineType) {
    this._type = value
  }

  // Getter y Setter de resourceGroup
  public get resourceGroup (): string {
    return this._resourceGroup
  }

  public set resourceGroup (value: string) {
    this._resourceGroup = value
  }

  // Getter y Setter de redVital
  public get redVital (): string {
    return this._redVital
  }

  public set redVital (value: string) {
    this._redVital = value
  }

  // Getters para network y disk
  public getNetwork (): AzureNetwork {
    return this.network
  }

  public getDisk (): AzureDisk {
    return this.disk
  }
}
