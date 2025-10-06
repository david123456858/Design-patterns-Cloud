import { GCPMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'
import { GPCDisk } from '../Disk/GCPDisk'
import { GPCNetwork } from '../Network/NetGCP'

export class GCPvm extends VM {
  constructor (
    ram: string,
    cpus: string,
    private _type: GCPMachineType,
    private _zone: string,
    private _project: string,
    private readonly network: GPCNetwork,
    private readonly disk: GPCDisk
  ) {
    super(ram, cpus)
  }

  // Getter y Setter de type
  public get type (): GCPMachineType {
    return this._type
  }

  public set type (value: GCPMachineType) {
    this._type = value
  }

  // Getter y Setter de zone
  public get zone (): string {
    return this._zone
  }

  public set zone (value: string) {
    this._zone = value
  }

  // Getter y Setter de project
  public get project (): string {
    return this._project
  }

  public set project (value: string) {
    this._project = value
  }
}
