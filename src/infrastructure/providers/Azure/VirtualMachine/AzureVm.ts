import { AzureMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'

export class Azurevm extends VM {
  constructor (
    ram: string,
    cpus: string,
    private _type: AzureMachineType,
    private _resourceGroup: string,
    private _redVital: string
  ) {
    super(ram, cpus)
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
}
