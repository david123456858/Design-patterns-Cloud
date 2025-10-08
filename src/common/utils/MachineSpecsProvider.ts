/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
interface MachineSpecs {
  vcpus: number
  memoryGB: number
}

export class MachineSpecsProvider {
  private static readonly AWS_SPECS: Record<string, MachineSpecs> = {
    // General Purpose (Standard)
    't3.medium': { vcpus: 2, memoryGB: 4 },
    'm5.large': { vcpus: 2, memoryGB: 8 },
    'm5.xlarge': { vcpus: 4, memoryGB: 16 },

    // Memory-Optimized
    'r5.large': { vcpus: 2, memoryGB: 16 },
    'r5.xlarge': { vcpus: 4, memoryGB: 32 },
    'r5.2xlarge': { vcpus: 8, memoryGB: 64 },

    // Compute-Optimized
    'c5.large': { vcpus: 2, memoryGB: 4 },
    'c5.xlarge': { vcpus: 4, memoryGB: 8 },
    'c5.2xlarge': { vcpus: 8, memoryGB: 16 }
  }

  private static readonly AZURE_SPECS: Record<string, MachineSpecs> = {
    // Standard / General Purpose
    D2s_v3: { vcpus: 2, memoryGB: 8 },
    D4s_v3: { vcpus: 4, memoryGB: 16 },
    D8s_v3: { vcpus: 8, memoryGB: 32 },

    // Memory-Optimized
    E2s_v3: { vcpus: 2, memoryGB: 16 },
    E4s_v3: { vcpus: 4, memoryGB: 32 },
    E8s_v3: { vcpus: 8, memoryGB: 64 },

    // Compute-Optimized
    F2s_v2: { vcpus: 2, memoryGB: 4 },
    F4s_v2: { vcpus: 4, memoryGB: 8 },
    F8s_v2: { vcpus: 8, memoryGB: 16 }
  }

  private static readonly GCP_SPECS: Record<string, MachineSpecs> = {
    // Standard / General Purpose
    'e2-standard-2': { vcpus: 2, memoryGB: 8 },
    'e2-standard-4': { vcpus: 4, memoryGB: 16 },
    'e2-standard-8': { vcpus: 8, memoryGB: 32 },

    // Memory-Optimized
    'n2-highmem-2': { vcpus: 2, memoryGB: 16 },
    'n2-highmem-4': { vcpus: 4, memoryGB: 32 },
    'n2-highmem-8': { vcpus: 8, memoryGB: 64 },

    // Compute-Optimized
    'n2-highcpu-2': { vcpus: 2, memoryGB: 2 },
    'n2-highcpu-4': { vcpus: 4, memoryGB: 4 },
    'n2-highcpu-8': { vcpus: 8, memoryGB: 8 }
  }

  static getMachineSpecs (provider: string, machineType: string): MachineSpecs {
    switch (provider.toLowerCase()) {
      case 'aws':
        return this.AWS_SPECS[machineType] || this.throwError(provider, machineType)
      case 'azure':
        return this.AZURE_SPECS[machineType] || this.throwError(provider, machineType)
      case 'gcp':
        return this.GCP_SPECS[machineType] || this.throwError(provider, machineType)
      default:
        throw new Error(`Provider ${provider} not supported`)
    }
  }

  private static throwError (provider: string, machineType: string): never {
    throw new Error(`Machine type ${machineType} not found for provider ${provider}`)
  }
}
