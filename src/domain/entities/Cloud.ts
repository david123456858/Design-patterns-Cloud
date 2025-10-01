import { VM } from './VM'
import { ProvisionResult } from '../valueObjects/ProvisionResult'

export abstract class Cloud {
  public abstract vmSupply (vm: VM): Promise<ProvisionResult>
}
