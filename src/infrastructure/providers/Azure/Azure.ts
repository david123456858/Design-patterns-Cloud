
import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { StatusResult } from '../../../common/enums/StatusResult'
import { Cloud } from '../../../domain/entities/Cloud'
import { Disk } from '../../../domain/entities/Disk'
import { Network } from '../../../domain/entities/Network'

import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'

export class AZURE extends Cloud {
  public async diskSupply (disk: Disk): Promise<ProvisionResult> {
    throw new Error('Method not implemented.')
  }

  public async netWorkSupply (net: Network): Promise<ProvisionResult> {
    throw new Error('Method not implemented.')
  }

  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    return new ProvisionResult(StatusResult.SUCCESS, vm, 'In Deployment...')
  }
}
