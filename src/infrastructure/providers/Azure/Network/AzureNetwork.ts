import { Network } from '../../../../domain/entities/Network'

export class AzureNetwork extends Network {
  private virtualNetwork: string
  private subnetName: string
  private networkSecurityGroup: string

  constructor (
    idNetwork: string,
    securityPolicy: string,
    virtualNetwork: string,
    subnetName: string,
    networkSecurityGroup: string
  ) {
    super(idNetwork, securityPolicy)
    this.virtualNetwork = virtualNetwork
    this.subnetName = subnetName
    this.networkSecurityGroup = networkSecurityGroup
  }

  // Getters
  getVirtualNetwork (): string {
    return this.virtualNetwork
  }

  getSubnetName (): string {
    return this.subnetName
  }

  getNetworkSecurityGroup (): string {
    return this.networkSecurityGroup
  }

  // Setters
  setVirtualNetwork (virtualNetwork: string): void {
    this.virtualNetwork = virtualNetwork
  }

  setSubnetName (subnetName: string): void {
    this.subnetName = subnetName
  }

  setNetworkSecurityGroup (networkSecurityGroup: string): void {
    this.networkSecurityGroup = networkSecurityGroup
  }
}
