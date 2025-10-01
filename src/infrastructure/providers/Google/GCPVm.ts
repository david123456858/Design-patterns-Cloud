import { GCPMachineType } from '../../../common/enums/MachineTypes'
import { VM } from '../../../domain/entities/VM'

export class GCPvm extends VM {
  constructor (
    ram: string,
    cpus: string,
    disk: string,
    private _type: GCPMachineType,
    private _zone: string,
    private _diskBase: string,
    private _project: string
  ) {
    super(ram, cpus, disk)
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

  // Getter y Setter de diskBase
  public get diskBase (): string {
    return this._diskBase
  }

  public set diskBase (value: string) {
    this._diskBase = value
  }

  // Getter y Setter de project
  public get project (): string {
    return this._project
  }

  public set project (value: string) {
    this._project = value
  }
}
