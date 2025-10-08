/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'
import { StatusResult } from '../../common/enums/StatusResult'
import { FailureProccess, SuccessProcess } from '../../common/utils/Result'
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

      const result = await provider.vmSupply(dto)
      if (result.getStatus() === StatusResult.ERROR) return FailureProccess(result.getMessage(), 404)

      return SuccessProcess({
        status: result.getStatus(),
        infoVm: result.getObject(),
        details: result.getMessage()
      }, 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
