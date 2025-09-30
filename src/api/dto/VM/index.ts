import { IsEnum, IsString } from 'class-validator'
import { CloudProviderType } from '../../../common/enums/ProviderType'
import { AWSMachineType, AzureMachineType, GCPMachineType } from '../../../common/enums/MachineTypes'

export abstract class VMDTO {
  @IsEnum(CloudProviderType)
    provider!: CloudProviderType
}
export class AWSVMDTO extends VMDTO {
  @IsEnum(AWSMachineType)
    type!: AWSMachineType

  @IsString()
    region!: string

  @IsString()
    vpc!: string

  @IsString()
    ami!: string
}

export class AzureVMDTO extends VMDTO {
  @IsEnum(AzureMachineType)
    type!: AzureMachineType

  @IsString()
    resourceGroup!: string

  @IsString()
    redVital!: string
}

export class GCPVMDTO extends VMDTO {
  @IsEnum(GCPMachineType)
    type!: GCPMachineType

  @IsString()
    zone!: string

  @IsString()
    diskBase!: string

  @IsString()
    project!: string
}
