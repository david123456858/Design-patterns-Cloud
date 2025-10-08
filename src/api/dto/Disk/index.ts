import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { DiskSku, diskTypeGPC, volumeTypeAWS } from '../../../common/enums/DiskTypes'

export abstract class DISKDTO {
  @IsString()
    idDisk!: string

  @IsString()
    scale!: string

  @IsNumber()
    sizeGB!: number

  @IsString()
    region!: string

  @IsOptional()
  @IsNumber()
    iops?: number
}

export class AWSDiskDto extends DISKDTO {
  @IsEnum(volumeTypeAWS)
    type!: volumeTypeAWS

  @IsBoolean()
    encrypted!: boolean
}

export class AzureDiskDto extends DISKDTO {
  @IsEnum(DiskSku)
    type!: DiskSku

  @IsBoolean()
    autoDelete!: boolean
}

export class GCPDisk extends DISKDTO {
  @IsEnum(diskTypeGPC)
    type!: diskTypeGPC

  @IsBoolean()
    autoDelete!: boolean
}
