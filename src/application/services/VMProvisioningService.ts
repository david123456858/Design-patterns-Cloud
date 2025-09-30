import { ProvisionRequestDTO } from '../../api/dto/VM/provisioning'
import { FailureProccess, SuccessProcess } from '../../common/utils/Result'
import { IFailureProcess, ISuccessProcess } from '../../domain/interfaces/IResult'

export class VMProvisioningService {
  public async provisionVM (dto: ProvisionRequestDTO): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      return SuccessProcess('Privisionado', 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
