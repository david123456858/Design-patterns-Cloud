/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { BuilderProviderVm } from '../../domain/interfaces/builderProvider'
import { specsProvider } from './specs'

export class Directo {
  private builder!: BuilderProviderVm

  setBuilder (builder: BuilderProviderVm): void {
    this.builder = builder
  }

  createStandard (vm: any): void {
    const specs = new specsProvider().getMachineSpecs(vm.provider, vm.typeMachine, vm.properties.type)
    this.builder.reset()
    this.builder.setVcpus(specs.vcpus)
    this.builder.setMemoryGB(specs.memoryGB)
    this.builder.setKeyPairName(vm.properties.keyPairName)
    this.builder.setDiskOptimization(vm.properties.memoryOptimization)
    this.builder.setMemoryOptimization(vm.properties.diskOptimization)
    this.builder.setTypeMachine(vm.properties.type)
    this.builder.setNetworkConfig(vm.properties.network)
    this.builder.setDiskConfig(vm.properties.disk)
  }

  createMemoryOpt (vm: any): void {
    const specs = new specsProvider().getMachineSpecs(vm.provider, vm.typeMachine, vm.properties.type)
    this.builder.reset()
    this.builder.setVcpus(specs.vcpus)
    this.builder.setMemoryGB(specs.memoryGB)
    this.builder.setKeyPairName(vm.properties.keyPairName)
    this.builder.setDiskOptimization(vm.properties.memoryOptimization)
    this.builder.setMemoryOptimization(vm.properties.diskOptimization)
    this.builder.setTypeMachine(vm.properties.type)
    this.builder.setNetworkConfig(vm.properties.network)
    this.builder.setDiskConfig(vm.properties.disk)
  }

  creteComputeOpt (vm: any): void {
    const specs = new specsProvider().getMachineSpecs(vm.provider, vm.typeMachine, vm.properties.type)
    this.builder.reset()
    this.builder.setVcpus(specs.vcpus)
    this.builder.setMemoryGB(specs.memoryGB)
    this.builder.setKeyPairName(vm.properties.keyPairName)
    this.builder.setDiskOptimization(vm.properties.memoryOptimization)
    this.builder.setMemoryOptimization(vm.properties.diskOptimization)
    this.builder.setTypeMachine(vm.properties.type)
    this.builder.configureProviderSpecific(vm.properties)
    this.builder.setNetworkConfig(vm.properties.network)
    this.builder.setDiskConfig(vm.properties.disk)
  }
}
