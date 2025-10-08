import { IsBoolean, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CloudProviderType } from '../../../common/enums/ProviderType'
import { AWSMachineType, AzureMachineType, GCPMachineType } from '../../../common/enums/MachineTypes'
import { AWSNetworkDto, AzureNetworKDto, GPCNetworkDto } from '../NetWork'
import { AWSDiskDto, AzureDiskDto, GCPDisk } from '../Disk'
import { Type } from 'class-transformer'
import { typeMachine } from '../../../common/enums/typeMahine'

export abstract class VMDTO {
  @IsEnum(CloudProviderType)
    provider!: CloudProviderType

  @IsEnum(typeMachine)
    typeMachine!: typeMachine
}

export abstract class VMDTOGENERIC {
  @IsOptional()
  @IsBoolean()
    memoryOptimization?: boolean

  @IsOptional()
  @IsBoolean()
    diskOptimization?: boolean

  @IsOptional()
  @IsBoolean()
    keyPairName?: string
}

export class AWSVMDTO extends VMDTOGENERIC {
  @IsEnum(AWSMachineType)
    type!: AWSMachineType

  @IsString()
    ami!: string

  @ValidateNested()
  @Type(() => AWSNetworkDto) // NECESARIO PARA TRANFORMARLA EN EL OBJETO
    network!: AWSNetworkDto

  @ValidateNested()
  @Type(() => AWSDiskDto)
    disk!: AWSDiskDto
}

export class AzureVMDTO extends VMDTOGENERIC {
  @IsEnum(AzureMachineType)
    type!: AzureMachineType

  @IsString()
    resourceGroup!: string

  @IsString()
    redVital!: string

  @ValidateNested()
  @Type(() => AzureNetworKDto) // Ahora sabe que debe crear una instancia de AWSNetworkDto
    network!: AzureNetworKDto

  @ValidateNested()
  @Type(() => AzureDiskDto)
    disk!: AzureDiskDto
}

export class GCPVMDTO extends VMDTOGENERIC {
  @IsEnum(GCPMachineType)
    type!: GCPMachineType

  @IsString()
    zone!: string

  @IsString()
    project!: string

  @ValidateNested()
  @Type(() => GCPDisk)
    disk!: GCPDisk

  @ValidateNested()
  @Type(() => GPCNetworkDto)
    network!: GPCNetworkDto
}

export type createVM =
  | AWSVMDTO
  | AzureVMDTO
  | GCPVMDTO
