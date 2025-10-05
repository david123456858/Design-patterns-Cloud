
import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'

import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'

export class AZURE extends Cloud {
  public async diskSupply (disk: string): Promise<ProvisionResult> {
    throw new Error('Method not implemented.')
  }

  public async netWorkSupply (net: string): Promise<ProvisionResult> {
    throw new Error('Method not implemented.')
  }

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    return new ProvisionResult(StatusResult.SUCCESS, vm, 'In Deployment...')
  }
}
