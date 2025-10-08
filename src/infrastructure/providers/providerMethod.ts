import { Directo } from '../../application/director/Director'

export class providerMethodDirector {
  private readonly vm: any
  private readonly methods: Map<string, any>

  constructor (private readonly director: Directo, vm: any) {
    this.vm = vm
    this.methods = new Map<string, any>([
      ['STANDARD', this.director.createStandard(this.vm)],
      ['MEMORY_OPT', this.director.createMemoryOpt(this.vm)],
      ['COMPUTE_OPT', this.director.creteComputeOpt(this.vm)]
    ])
  }

  getProvider (method: string): any {
    return this.methods.get(method)
  }
}
