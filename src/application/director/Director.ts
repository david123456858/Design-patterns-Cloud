/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { VM } from '../../domain/entities/VM'
import { BuilderProviderVm } from '../../domain/interfaces/builderProvider'

export class Directo {
  private builder!: BuilderProviderVm

  setBuilder (builder: BuilderProviderVm): void {
    this.builder = builder
  }

  createStandard (vm: any): void {
    const specs = this.getMachineSpecs(vm.provider, vm.typeMachine, vm.properties.type)
    this.builder.reset()
    this.builder.setVcpus(specs.vcpus)
    this.builder.setMemoryGB(specs.memoryGB)
    this.builder.setDiskOptimization(false)
    this.builder.setMemoryOptimization(false)
    this.builder.setNetworkConfig(vm.properties.network)
    this.builder.setDiskConfig(vm.properties.disk)
  }

  createMemoryOpt (vm: any): VM {
    return {} as VM
  }

  creteComputeOpt (vm: any): VM {
    return {} as VM
  }

  private getMachineSpecs (
    provider: 'AWS' | 'AZURE' | 'GCP',
    type: 'STANDARD' | 'MEMORY_OPT' | 'COMPUTE_OPT',
    machineSize: string
  ): { vcpus: number, memoryGB: number } {
    // Define types for specs
    type MachineSpec = { vcpus: number, memoryGB: number }
    type MachineTypeMap = Record<string, MachineSpec>
    type ProviderTypeMap = {
      STANDARD: MachineTypeMap
      MEMORY_OPT: MachineTypeMap
      COMPUTE_OPT: MachineTypeMap
    }
    type SpecsMap = {
      AWS: ProviderTypeMap
      AZURE: ProviderTypeMap
      GCP: ProviderTypeMap
    }

    const specs: SpecsMap = {
      AWS: {
        STANDARD: {
          't3.medium': { vcpus: 2, memoryGB: 4 },
          'm5.large': { vcpus: 2, memoryGB: 8 },
          'm5.xlarge': { vcpus: 4, memoryGB: 16 }
        },
        MEMORY_OPT: {
          'r5.large': { vcpus: 2, memoryGB: 16 },
          'r5.xlarge': { vcpus: 4, memoryGB: 32 },
          'r5.2xlarge': { vcpus: 8, memoryGB: 64 }
        },
        COMPUTE_OPT: {
          'c5.large': { vcpus: 2, memoryGB: 4 },
          'c5.xlarge': { vcpus: 4, memoryGB: 8 },
          'c5.2xlarge': { vcpus: 8, memoryGB: 16 }
        }
      },
      AZURE: {
        STANDARD: {
          D2s_v3: { vcpus: 2, memoryGB: 8 },
          D4s_v3: { vcpus: 4, memoryGB: 16 },
          D8s_v3: { vcpus: 8, memoryGB: 32 }
        },
        MEMORY_OPT: {
          E2s_v3: { vcpus: 2, memoryGB: 16 },
          E4s_v3: { vcpus: 4, memoryGB: 32 },
          E8s_v3: { vcpus: 8, memoryGB: 64 }
        },
        COMPUTE_OPT: {
          F2s_v2: { vcpus: 2, memoryGB: 4 },
          F4s_v2: { vcpus: 4, memoryGB: 8 },
          F8s_v2: { vcpus: 8, memoryGB: 16 }
        }
      },
      GCP: {
        STANDARD: {
          'e2-standard-2': { vcpus: 2, memoryGB: 8 },
          'e2-standard-4': { vcpus: 4, memoryGB: 16 },
          'e2-standard-8': { vcpus: 8, memoryGB: 32 }
        },
        MEMORY_OPT: {
          'n2-highmem-2': { vcpus: 2, memoryGB: 16 },
          'n2-highmem-4': { vcpus: 4, memoryGB: 32 },
          'n2-highmem-8': { vcpus: 8, memoryGB: 64 }
        },
        COMPUTE_OPT: {
          'n2-highcpu-2': { vcpus: 2, memoryGB: 2 },
          'n2-highcpu-4': { vcpus: 4, memoryGB: 4 },
          'n2-highcpu-8': { vcpus: 8, memoryGB: 8 }
        }
      }
    }

    return specs[provider]?.[type]?.[machineSize] ?? { vcpus: 0, memoryGB: 0 }
  }
}
