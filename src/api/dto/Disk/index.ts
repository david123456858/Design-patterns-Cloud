import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator'
import { DiskSku, diskTypeGPC, volumeTypeAWS } from '../../../common/enums/DiskTypes'

abstract class DISKDTO {
  @IsString()
    idDisk!: string

  @IsString()
    scale!: string

  @IsNumber()
    sizeGB!: number
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

export class GCPDisk {
  @IsEnum(diskTypeGPC)
    type!: diskTypeGPC

  @IsBoolean()
    autoDelete!: boolean
}
