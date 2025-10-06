import { AWSMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'
import { AWSDisk } from '../Disk/AWSDisk'
import { AWSNetwork } from '../NetWork/AWSNetwork'

export class AWSvm extends VM {
  constructor (
    ram: string,
    cpus: string,
    private type: AWSMachineType,
    private region: string,
    private AMI: string,
    private readonly network: AWSNetwork,
    private readonly disk: AWSDisk
  ) {
    super(ram, cpus)
  }

  // Getters
  getType (): AWSMachineType {
    return this.type
  }

  getRegion (): string {
    return this.region
  }

  getAMI (): string {
    return this.AMI
  }

  // Setters
  setType (type: AWSMachineType): void {
    this.type = type
  }

  setRegion (region: string): void {
    this.region = region
  }

  setAMI (AMI: string): void {
    this.AMI = AMI
  }
}
