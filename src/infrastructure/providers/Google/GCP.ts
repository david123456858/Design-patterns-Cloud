import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { GPCDisk } from './Disk/GCPDisk'
import { GPCNetwork } from './Network/NetGCP'
import { GCPvm } from './VirtualMachine/GCPVm'

export class GCP extends Cloud {
  public async diskSupply (disk: any): Promise<ProvisionResult> {
    const diskInstance = new GPCDisk(
      disk.disk.idDisk,
      disk.disk.scale,
      disk.disk.sizeGB,
      disk.disk.type,
      disk.disk.autoDelete
    )

    return new ProvisionResult(StatusResult.SUCCESS, diskInstance, 'Disk Created')
  }

  public async netWorkSupply (net: any): Promise<ProvisionResult> {
    const netWorkInstance = new GPCNetwork(
      net.network.idNetwork,
      net.network.securityPolicy,
      net.network.networkName,
      net.network.subnetworkName,
      net.network.firewallTag)

    return new ProvisionResult(StatusResult.SUCCESS, netWorkInstance, 'Network Created')
  }

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    const net = await this.netWorkSupply(vm.propities)
    const disk = await this.diskSupply(vm.propities)

    const vmInstance = new GCPvm(
      '64GB',
      '24',
      vm.propities.type,
      vm.propities.zone,
      vm.propities.project,
      net.getVM(),
      disk.getVM())

    return new ProvisionResult(StatusResult.SUCCESS, vmInstance, 'In Deployment...')
  }
}
