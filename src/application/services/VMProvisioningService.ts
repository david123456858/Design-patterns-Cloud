/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'
import { FailureProccess, SuccessProcess } from '../../common/utils/Result'
import { Cloud } from '../../domain/entities/Cloud'
import { IFailureProcess, ISuccessProcess } from '../../domain/interfaces/IResult'
import { ProviderCloud } from '../../infrastructure/providers/ProviderCloud'

export class VMProvisioningService {
  private readonly cloudProvider: ProviderCloud
  constructor () {
    this.cloudProvider = new ProviderCloud()
  }

  public async provisionVM (dto: ProvisionRequestDTO): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const provider = this.cloudProvider.getProvider(dto.provider)
      if (!provider) return FailureProccess('We Dont have this service cloud', 400)

      const result = provider.vmSupply(dto)
      return SuccessProcess('Privisionado', 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
