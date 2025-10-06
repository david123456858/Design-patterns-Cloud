
import { ProvisionResult } from '../valueObjects/ProvisionResult'
//  import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'

export abstract class Cloud {
  public abstract vmSupply (vm: any): Promise<ProvisionResult>
  public abstract diskSupply (disk: any): Promise<ProvisionResult>
  public abstract netWorkSupply (net: any): Promise<ProvisionResult>
}
