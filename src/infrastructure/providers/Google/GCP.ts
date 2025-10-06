import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { GPCDisk } from './Disk/GCPDisk'
import { GPCNetwork } from './Network/NetGCP'

export class GCP extends Cloud {
  public async diskSupply (disk: GPCDisk): Promise<ProvisionResult> {
    const diskInstance = new GPCDisk(
      disk.getScale(),
      disk.getSizeGB(),
      disk.getType(),
      disk.getAutoDelete())

    return new ProvisionResult(StatusResult.SUCCESS, diskInstance, 'Disk Created')
  }

  public async netWorkSupply (net: any): Promise<ProvisionResult> {
    const netWorkInstance = new GPCNetwork(
      net.network.idNetwork,
      net.network.securityPolicy,
      net.network.networkName,
      net.network.subnetworkName,
      net.network.firewallTag)

    return new ProvisionResult(StatusResult.SUCCESS, netWorkInstance, 'Disk Created')
  }

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    const net = await this.netWorkSupply(vm.propities)

    return new ProvisionResult(StatusResult.SUCCESS, net.getVM(), 'In Deployment...')
  }
}
