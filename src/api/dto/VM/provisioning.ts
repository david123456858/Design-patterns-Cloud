import { IsEnum, ValidateNested } from 'class-validator'
import { Type, TypeHelpOptions } from 'class-transformer'
import { CloudProviderType } from '../../../common/enums/ProviderType'
import { providerCloudDto } from './ProviderCloudDto'
import { VMDTO } from '.'

export class ProvisionRequestDTO {
  @IsEnum(CloudProviderType)
    provider!: CloudProviderType

  @ValidateNested()
  @Type((options?: TypeHelpOptions) => {
    const provider = (options?.object as ProvisionRequestDTO).provider
    const classDto = new providerCloudDto().getDto(provider)

    return classDto ?? VMDTO
  })
    propities!: VMDTO
}
