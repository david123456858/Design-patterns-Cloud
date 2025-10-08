export enum AWSMachineType {
  // General Purpose
  T3_MEDIUM = 't3.medium',
  M5_LARGE = 'm5.large',
  M5_XLARGE = 'm5.xlarge',

  // Memory Optimized
  R5_LARGE = 'r5.large',
  R5_XLARGE = 'r5.xlarge',
  R5_2XLARGE = 'r5.2xlarge',

  // Compute Optimized
  C5_LARGE = 'c5.large',
  C5_XLARGE = 'c5.xlarge',
  C5_2XLARGE = 'c5.2xlarge'
}

export enum AzureMachineType {
  // General Purpose
  D2S_V3 = 'D2s_v3',
  D4S_V3 = 'D4s_v3',
  D8S_V3 = 'D8s_v3',

  // Memory Optimized
  E2S_V3 = 'E2s_v3',
  E4S_V3 = 'E4s_v3',
  E8S_V3 = 'E8s_v3',

  // Compute Optimized
  F2S_V2 = 'F2s_v2',
  F4S_V2 = 'F4s_v2',
  F8S_V2 = 'F8s_v2'
}

export enum GCPMachineType {
  // Standard / General Purpose
  E2_STANDARD_2 = 'e2-standard-2',
  E2_STANDARD_4 = 'e2-standard-4',
  E2_STANDARD_8 = 'e2-standard-8',

  // Memory Optimized
  N2_HIGHMEM_2 = 'n2-highmem-2',
  N2_HIGHMEM_4 = 'n2-highmem-4',
  N2_HIGHMEM_8 = 'n2-highmem-8',

  // Compute Optimized
  N2_HIGHCPU_2 = 'n2-highcpu-2',
  N2_HIGHCPU_4 = 'n2-highcpu-4',
  N2_HIGHCPU_8 = 'n2-highcpu-8'
}
