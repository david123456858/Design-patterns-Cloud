import { IsString } from 'class-validator'

export abstract class NetworkDto {
  @IsString()
    idNetwork!: string

  @IsString()
    securityPolicy!: string
}

export class GPCNetworkDto extends NetworkDto {
  @IsString()
    networkName!: string

  @IsString()
    subnetworkName!: string

  @IsString()
    firewallTag!: string
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
