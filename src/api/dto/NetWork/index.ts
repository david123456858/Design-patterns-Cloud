import { IsBoolean, IsOptional, IsString } from 'class-validator'

export abstract class NetworkDto {
  @IsString()
    idNetwork!: string

  @IsString()
    securityPolicy!: string

  @IsString()
    region!: string

  @IsOptional()
    firewallRule?: string[]

  @IsOptional()
  @IsBoolean()
    publicIp?: boolean
}

export class GPCNetworkDto extends NetworkDto {
  @IsString()
    networkName!: string

  @IsString()
    subnetworkName!: string
}

export class AzureNetworKDto extends NetworkDto {
  @IsString()
    subnetName!: string

  @IsString()
    virtualNetwork!: string

  @IsString()
    networkSecurityGroup!: string
}

export class AWSNetworkDto extends NetworkDto {
  @IsString()
    vcpId!: string

  @IsString()
    subnet!: string

  @IsString()
    IdsecurityGroup!: string
}
