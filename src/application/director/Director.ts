/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { VM } from '../../domain/entities/VM'
import { BuilderProviderVm } from '../../domain/interfaces/builderProvider'

export class Directo {
  private builder!: BuilderProviderVm

  setBuilder (builder: BuilderProviderVm): void {
    this.builder = builder
  }

  createStandard (vm: any): VM {
    console.log('vamo a crear una standard')
    console.log(vm)

    return {} as VM
  }

  createMemoryOpt (vm: any): VM {
    return {} as VM
  }

  creteComputeOpt (vm: any): VM {
    return {} as VM
  }
}
