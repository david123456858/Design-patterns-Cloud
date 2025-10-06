import { ValidateNested } from 'class-validator'
import { Type, TypeHelpOptions } from 'class-transformer'
import { providerCloudDto } from '../Provider/ProviderCloudDto'
import { VMDTO } from '.'

export class ProvisionRequestDTO extends VMDTO {
  @ValidateNested()
  @Type((options?: TypeHelpOptions) => { //
    const provider = (options?.object as ProvisionRequestDTO).provider
    const classDto = new providerCloudDto().getDto(provider)

    return classDto ?? VMDTO
  })
    propities!: VMDTO
}
