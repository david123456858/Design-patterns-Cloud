/* eslint-disable @typescript-eslint/no-unused-vars */
import { AWSNetworkDto } from '../../../api/dto/NetWork'
import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { Directo } from '../../../application/director/Director'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { ConcreteAwsVm } from './build/ConcreteAwsVm'
import { providerMethodDirector } from '../providerMethod'
// import { AWSDisk } from './Disk/AWSDisk'
// import { AWSNetwork } from './NetWork/AWSNetwork'

export class AWS extends Cloud {
  public async diskSupply (disk: any): Promise<ProvisionResult> {
    // const diskInstance = new AWSDisk(
    //   disk.idDisk,
    //   disk.scale,
    //   disk.sizeGB,
    //   disk.type,
    //   disk.encrypted
    // )
    return new ProvisionResult(StatusResult.SUCCESS, 'diskInstance', 'Disk Created')
  }

  public async netWorkSupply (net: AWSNetworkDto): Promise<ProvisionResult> {
    // const networkInstance = new AWSNetwork(
    //   net.idNetwork,
    //   net.securityPolicy,
    //   net.vcpId,
    //   net.subnet,
    //   net.IdsecurityGroup
    // )
    return new ProvisionResult(StatusResult.SUCCESS, 'networkInstance', 'Network Created')
  }

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    // const net = await this.netWorkSupply(vm.network)
    // const disk = await this.diskSupply(vm.disk)
    const builder = new ConcreteAwsVm()
    const director = new Directo()
    director.setBuilder(builder)
    const provider = new providerMethodDirector(director, vm).getProvider(vm.typeMachine)
    return builder.getResult()
  }
}
