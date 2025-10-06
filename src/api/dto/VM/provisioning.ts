import { ValidateNested } from 'class-validator'
import { Type, TypeHelpOptions } from 'class-transformer'
import { providerCloudDto } from '../Provider/ProviderCloudDto'
import { createVM, VMDTO } from '.'

export class ProvisionRequestDTO extends VMDTO {
  @ValidateNested()
  @Type((options?: TypeHelpOptions | undefined) => {
    const provider = (options?.object as ProvisionRequestDTO)?.provider
    const providerService = new providerCloudDto()
    const classDto = providerService.getDto(provider)

    // Return the constructor class
    return classDto
  })
    properties!: createVM
}
