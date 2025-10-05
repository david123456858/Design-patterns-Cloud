import { AWSMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'

export class AWSvm extends VM {
  constructor (
    ram: string,
    cpus: string,
    private type: AWSMachineType,
    private region: string,
    private VPC: string,
    private AMI: string
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

  getVPC (): string {
    return this.VPC
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

  setVPC (VPC: string): void {
    this.VPC = VPC
  }

  setAMI (AMI: string): void {
    this.AMI = AMI
  }
}
