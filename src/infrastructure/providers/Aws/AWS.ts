import { AWSNetworkDto } from '../../../api/dto/NetWork'
import { AWSVMDTO } from '../../../api/dto/VM'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { AWSDisk } from './Disk/AWSDisk'
import { AWSNetwork } from './NetWork/AWSNetwork'
import { AWSvm } from './VirtualMachine/AWSVm'

export class AWS extends Cloud {
  public async diskSupply (disk: any): Promise<ProvisionResult> {
    const diskInstance = new AWSDisk(
      disk.idDisk,
      disk.scale,
      disk.sizeGB,
      disk.type,
      disk.encrypted
    )
    return new ProvisionResult(StatusResult.SUCCESS, diskInstance, 'Disk Created')
  }

  public async netWorkSupply (net: AWSNetworkDto): Promise<ProvisionResult> {
    const networkInstance = new AWSNetwork(
      net.idNetwork,
      net.securityPolicy,
      net.vcpId,
      net.subnet,
      net.IdsecurityGroup
    )
    return new ProvisionResult(StatusResult.SUCCESS, networkInstance, 'Network Created')
  }

  public async vmSupply (vm: AWSVMDTO): Promise<ProvisionResult> {
    const net = await this.netWorkSupply(vm.network)
    const disk = await this.diskSupply(vm.disk)

    const vmInstance = new AWSvm(
      '16GB',
      '4',
      vm.type,
      vm.region,
      vm.ami, // Cambié VPC por AMI según tu DTO
      net.getObject(),
      disk.getObject()
    )

    return new ProvisionResult(StatusResult.SUCCESS, vmInstance, 'VM in Deployment...')
  }
}
