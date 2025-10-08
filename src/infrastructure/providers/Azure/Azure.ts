
import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { Directo } from '../../../application/director/Director'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { providerMethodDirector } from '../providerMethod'
import { ConcreteAzureBuilder } from './build/ConcreteAzureBuilder'
// import { AzureDisk } from './Disk/AzureDisk'
// import { AzureNetwork } from './Network/AzureNetwork'

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

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    // Crea las entidades de dominio desde el DTO
    const net = await this.netWorkSupply(vm.properties.network)
    const disk = await this.diskSupply(vm.properties.disk)

    const builder = new ConcreteAzureBuilder()
    const director = new Directo()
    director.setBuilder(builder)

    const provider = new providerMethodDirector(director, vm).getProvider(vm.typeMachine)

    return builder.getResult()
  }
}
