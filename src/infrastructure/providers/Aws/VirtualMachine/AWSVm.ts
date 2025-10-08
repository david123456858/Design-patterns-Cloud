import { AWSMachineType } from '../../../../common/enums/MachineTypes'
import { VM } from '../../../../domain/entities/VM'
import { AWSDisk } from '../Disk/AWSDisk'
import { AWSNetwork } from '../NetWork/AWSNetwork'

export class AWSvm extends VM {
  constructor (
    vcpus: number,
    memoryGB: number,
    private type: AWSMachineType,
    private AMI: string,
    private readonly network: AWSNetwork,
    private readonly disk: AWSDisk,
    memoryOptimization: boolean = false,
    diskOptimization: boolean = false,
    keyPairName: string = ''
  ) {
    super(vcpus, memoryGB, memoryOptimization, diskOptimization, keyPairName)
  }

  // Getters
  getType (): AWSMachineType {
    return this.type
  }

  getAMI (): string {
    return this.AMI
  }

  // Setters
  setType (type: AWSMachineType): void {
    this.type = type
  }

  setAMI (AMI: string): void {
    this.AMI = AMI
  }
}
