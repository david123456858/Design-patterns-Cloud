/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { BuilderProviderVm } from '../../../../domain/interfaces/builderProvider'
import { ProvisionResult } from '../../../../domain/valueObjects/ProvisionResult'
import { AWS } from '../AWS'
import { AWSvm } from '../VirtualMachine/AWSVm'

export class ConcreteAwsVm implements BuilderProviderVm {
  private readonly provider: AWS
  private readonly product: AWSvm

  private constructor () {
    this.provider = new AWS()
    this.reset()
  }

  reset (): void {

  }

  setVcpus (vcpus: number): void {
  }

  setMemoryGB (memory: number): void {
    // lógica para configurar memoria
  }

  setMemoryOptimization (hasMemoryOptimization: boolean): void {
    // lógica para optimización de memoria
  }

  setDiskOptimization (hasDiskOptimization: boolean): void {
    // lógica para optimización de disco
  }

  setKeyPairName (Name: string): void {
    // lógica para asignar KeyPair
  }

  setRegion (region: string): void {
    // lógica para región
  }

  setNetworkConfig (net: any): void {
    // lógica para red
  }

  setDiskConfig (disk: any): void {
    // lógica para disco
  }

  getResult (): ProvisionResult {
    return {} as ProvisionResult
  }
}
