import { ProvisionRequestDTO } from '../../../api/dto/VM/provisioning'
import { Cloud } from '../../../domain/entities/Cloud'
import { ProvisionResult } from '../../../domain/valueObjects/ProvisionResult'

export class OnPromise extends Cloud {
  public async vmSupply (vm: ProvisionRequestDTO): Promise<ProvisionResult> {
    throw new Error('Method not implemented.')
  }
}
