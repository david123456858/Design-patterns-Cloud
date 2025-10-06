
import { ProvisionResult } from '../valueObjects/ProvisionResult'
import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'
import { Disk } from './Disk'
import { Network } from './Network'

export abstract class Cloud {
  public abstract vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult>
  public abstract diskSupply (disk: any): Promise<ProvisionResult>
  public abstract netWorkSupply (net: any): Promise<ProvisionResult>
}
