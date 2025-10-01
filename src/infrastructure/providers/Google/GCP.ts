import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { VM } from '../../../domain/entities/VM'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'

export class GCP extends Cloud {
  public async vmSupply (vm: VM): Promise<ProvisionResult> {
    return new ProvisionResult(StatusResult.SUCCESS, vm, 'Created succesfully')
  }
}
