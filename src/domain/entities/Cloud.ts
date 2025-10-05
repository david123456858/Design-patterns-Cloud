
import { ProvisionResult } from '../valueObjects/ProvisionResult'
import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'

export abstract class Cloud {
  public abstract vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult>
  public abstract diskSupply (disk: string): Promise<ProvisionResult>
  public abstract netWorkSupply (net: string): Promise<ProvisionResult>
}
