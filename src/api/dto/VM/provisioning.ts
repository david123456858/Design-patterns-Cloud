import { IsEnum, ValidateNested, Type } from 'class-validator'
import { CloudProviderType } from '../../../common/enums/ProviderType'
import { DTOClass, providerCloudDto } from './ProviderCloudDto'
import { VMDTO } from '.'

export class ProvisionRequestDTO {
  @IsEnum(CloudProviderType)
    provider!: CloudProviderType

  @ValidateNested()
  @Type((options) => {
    const classDto = new providerCloudDto().getDto(options?.object?.provider)
    return classDto
  })
    propities!: DTOClass<VMDTO>
}
