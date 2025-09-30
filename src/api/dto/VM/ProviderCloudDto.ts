/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AWSVMDTO, AzureVMDTO, GCPVMDTO, VMDTO } from '.'
import { CloudProviderType } from '../../../common/enums/ProviderType'

export type DTOClass<T> = new (...args: any[]) => T // por revisar

export class providerCloudDto {
  private static instance: providerCloudDto

  private readonly providers: Map<CloudProviderType, DTOClass<VMDTO>> =
    new Map<CloudProviderType, DTOClass<VMDTO>>([
      [CloudProviderType.AWS, AWSVMDTO],
      [CloudProviderType.AZURE, AzureVMDTO],
      [CloudProviderType.GCP, GCPVMDTO]
    ])

  static getInstance (): providerCloudDto {
    if (!this.instance) {
      this.instance = new providerCloudDto()
    }
    return this.instance
  }

  getDto (provider: CloudProviderType): DTOClass<VMDTO> | undefined {
    const providerd = this.getDto(provider)

    if (!providerd) {
      console.warn(`Provider ${providerd} not found, returning base VMDTO`)
    }

    return this.providers.get(provider)
  }
}
