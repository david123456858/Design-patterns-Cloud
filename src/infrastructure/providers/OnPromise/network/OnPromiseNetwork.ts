import { Network } from '../../../../domain/entities/Network'

export class OnPromiseNetwork extends Network {
  private physicalInterface: string
  private vlanId: string
  private firewallPolicy: string

  constructor (
    idNetwork: string,
    securityPolicy: string,
    physicalInterface: string,
    vlanId: string,
    firewallPolicy: string
  ) {
    super(idNetwork, securityPolicy)
    this.physicalInterface = physicalInterface
    this.vlanId = vlanId
    this.firewallPolicy = firewallPolicy
  }

  // Getters
  getPhysicalInterface (): string {
    return this.physicalInterface
  }

  getVlanId (): string {
    return this.vlanId
  }

  getFirewallPolicy (): string {
    return this.firewallPolicy
  }

  // Setters
  setPhysicalInterface (physicalInterface: string): void {
    this.physicalInterface = physicalInterface
  }

  setVlanId (vlanId: string): void {
    this.vlanId = vlanId
  }

  setFirewallPolicy (firewallPolicy: string): void {
    this.firewallPolicy = firewallPolicy
  }
}
