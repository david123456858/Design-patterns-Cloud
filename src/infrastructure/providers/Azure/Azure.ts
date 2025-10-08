import { AzureVMDTO } from '../../../api/dto/VM'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
// import { AzureDisk } from './Disk/AzureDisk'
// import { AzureNetwork } from './Network/AzureNetwork'
import { Azurevm } from './VirtualMachine/AzureVm'

export class AZURE extends Cloud {
  public async diskSupply (disk: any): Promise<ProvisionResult> {
    // const diskInstance = new AzureDisk(
    //   disk.idDisk,
    //   disk.scale,
    //   disk.sizeGB,
    //   disk.type,
    //   disk.autoDelete
    // )
    return new ProvisionResult(StatusResult.SUCCESS, 'diskInstance', 'Disk Created')
  }

  public async netWorkSupply (net: any): Promise<ProvisionResult> {
    // const networkInstance = new AzureNetwork(
    //   net.idNetwork,
    //   net.securityPolicy,
    //   net.virtualNetwork,
    //   net.subnetName,
    //   net.networkSecurityGroup
    // )
    return new ProvisionResult(StatusResult.SUCCESS, ' networkInstance', 'Network Created')
  }

  public async vmSupply (vm: AzureVMDTO): Promise<ProvisionResult> {
    // Crea las entidades de dominio desde el DTO
    const net = await this.netWorkSupply(vm.network)
    const disk = await this.diskSupply(vm.disk)

    // const vmInstance = new Azurevm(
    //   '32GB',
    //   '8',
    //   vm.type,
    //   vm.resourceGroup,
    //   vm.redVital,
    //   net.getObject(),
    //   disk.getObject()
    // )

    return new ProvisionResult(StatusResult.SUCCESS, 'vmInstance', 'Azure VM in Deployment...')
  }
}
