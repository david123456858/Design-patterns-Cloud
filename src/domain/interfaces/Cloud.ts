import { VM } from '../entities/VM'
import { ProvisionResult } from '../valueObjects/ProvisionResult'

export abstract class Cloud {
  public abstract getProviderVm (): VM
  public abstract vmSupply (vm: VM): Promise<ProvisionResult>
}
