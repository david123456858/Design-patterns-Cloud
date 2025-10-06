import { StatusResult } from '../../common/enums/StatusResult'

export class ProvisionResult {
  private readonly status: StatusResult
  private readonly object: any // Aquí deberíamos usar el tipo VM pero lo mantenemos any por ahora
  private readonly message: string

  constructor (status: StatusResult, object: any, message: string) {
    this.status = status
    this.object = object
    this.message = message
  }

  getStatus (): StatusResult {
    return this.status
  }

  getObject (): any {
    return this.object
  }

  getMessage (): string {
    return this.message
  }
}
