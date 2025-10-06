import { Network } from '../../../../domain/entities/Network'

export class GPCNetwork extends Network {
  private networkName: string
  private subnetworkName: string
  private firewallTag: string

  constructor (
    idNetwork: string,
    securityPolicy: string,
    networkName: string,
    subnetworkName: string,
    firewallTag: string
  ) {
    super(idNetwork, securityPolicy)
    this.networkName = networkName
    this.subnetworkName = subnetworkName
    this.firewallTag = firewallTag
  }

  // Getters
  getNetworkName (): string {
    return this.networkName
  }

  getSubnetworkName (): string {
    return this.subnetworkName
  }

  getFirewallTag (): string {
    return this.firewallTag
  }

  // Setters
  setNetworkName (networkName: string): void {
    this.networkName = networkName
  }

  setSubnetworkName (subnetworkName: string): void {
    this.subnetworkName = subnetworkName
  }

  setFirewallTag (firewallTag: string): void {
    this.firewallTag = firewallTag
  }
}
