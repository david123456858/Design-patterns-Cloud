import { ProvisionResult } from '../valueObjects/ProvisionResult'

export interface BuilderProviderVm {
  reset: () => void
  setVcpus: (vcpus: number) => void
  setMemoryGB: (memory: number) => void
  setMemoryOptimization: (hasMemoryOptimization: boolean) => void
  setDiskOptimization: (hasDiskOptimization: boolean) => void
  setKeyPairName: (Name: string) => void
  setRegion: (region: string) => void
  setNetworkConfig: (net: any) => void
  setDiskConfig: (disk: any) => void
  getResult: () => ProvisionResult

}
