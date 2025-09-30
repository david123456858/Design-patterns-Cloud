import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'
import { AWSvm } from './AWSVm'

export class AWS extends Cloud {
  public async vmSupply (vm: AWSvm): Promise<ProvisionResult> {
    return new ProvisionResult(
      StatusResult.SUCCESS,
      vm,
      'created succesafuly'
    )
  }
}
