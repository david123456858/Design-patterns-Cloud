/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Directo } from '../../application/director/Director'
import { StatusResult } from '../../common/enums/StatusResult'
import { ProvisionResult } from '../../domain/valueObjects/ProvisionResult'

export class providerMethodDirector {
  private readonly vm: any
  private readonly methods: Map<string, any>

  constructor (private readonly director: Directo, vm: any) {
    this.vm = vm
    this.methods = new Map<string, any>([
      ['STANDARD', this.director.createStandard.bind(this.director)],
      ['MEMORY_OPT', this.director.createMemoryOpt.bind(this.director)],
      ['COMPUTE_OPT', this.director.creteComputeOpt.bind(this.director)]
    ])
  }

  getProvider (method: string): any {
    const buildMethod = this.methods.get(method)
    if (!buildMethod) return new ProvisionResult(StatusResult.ERROR, '', 'Not Found Method')

    return buildMethod(this.vm)
  }
}
