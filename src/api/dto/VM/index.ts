import { IsEnum, IsString, ValidateNested } from 'class-validator'
import { CloudProviderType } from '../../../common/enums/ProviderType'
import { AWSMachineType, AzureMachineType, GCPMachineType } from '../../../common/enums/MachineTypes'
import { AWSNetworkDto, AzureNetworKDto, GPCNetworkDto } from '../NetWork'
import { AWSDiskDto, AzureDiskDto, GCPDisk } from '../Disk'
import { Type } from 'class-transformer'

export abstract class VMDTO {
  @IsEnum(CloudProviderType)
    provider!: CloudProviderType
}

export class AWSVMDTO {
  @IsEnum(AWSMachineType)
    type!: AWSMachineType

  @IsString()
    region!: string

  @IsString()
    ami!: string

  @ValidateNested()
  @Type(() => AWSNetworkDto) // NECESARIO PARA TRANFORMARLA EN EL OBJETO
    network!: AWSNetworkDto

  @ValidateNested()
  @Type(() => AWSDiskDto)
    disk!: AWSDiskDto
}

export class AzureVMDTO {
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

export class GCPVMDTO {
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
