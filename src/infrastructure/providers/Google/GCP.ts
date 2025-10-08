import { GPCNetworkDto } from '../../../api/dto/NetWork'
import { GCPVMDTO } from '../../../api/dto/VM'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { GPCDisk } from './Disk/GCPDisk'
import { GPCNetwork } from './Network/NetGCP'
import { GCPvm } from './VirtualMachine/GCPVm'

export class GCP extends Cloud {
  public async diskSupply (disk: any): Promise<ProvisionResult> {
    // const diskInstance = new GPCDisk(
    //   disk.idDisk,
    //   disk.scale,
    //   disk.sizeGB,
    //   disk.type,
    //   disk.autoDelete
    // )

    return new ProvisionResult(StatusResult.SUCCESS, 'diskInstance', 'Disk Created')
  }

  public async netWorkSupply (net: GPCNetworkDto): Promise<ProvisionResult> {
    // const netWorkInstance = new GPCNetwork(
    //   net.idNetwork,
    //   net.securityPolicy,
    //   net.networkName,
    //   net.subnetworkName,
    //   net.firewallTag
    // )

    return new ProvisionResult(StatusResult.SUCCESS, 'netWorkInstance', 'Network Created')
  }

  public async vmSupply (vm: GCPVMDTO): Promise<ProvisionResult> {
    const net = await this.netWorkSupply(vm.network)
    const disk = await this.diskSupply(vm.disk)

    // const vmInstance = new GCPvm(
    //   '64GB',
    //   '24',
    //   vm.type,
    //   vm.zone,
    //   vm.project,
    //   net.getObject(),
    //   disk.getObject())

    return new ProvisionResult(StatusResult.SUCCESS, 'vmInstance', 'In Deployment...')
  }
}
