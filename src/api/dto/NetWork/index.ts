
export abstract class NetworkDto {
  idNetwork!: string
  securityPolicy!: string
}

export class GPCNetworkDto extends NetworkDto {
  networkName!: string
  subnetworkName!: string
  firewallTag!: string
}

export class AzureNetworKDto extends NetworkDto {
  subnetName!: string
  virtualNetwork!: string
  networkSecurityGroup!: string
}

export class AWSNetworkDto extends NetworkDto {
  vcpId!: string
  subnet!: string
  IdsecurityGroup!: string
}
