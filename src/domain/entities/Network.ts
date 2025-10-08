export abstract class Network {
  protected idNetwork: string
  protected region: string
  protected securityPolicy: string
  protected publicIp?: boolean
  protected firewallRule?: string[]

  constructor (
    idNetwork: string,
    securityPolicy: string,
    region: string,
    publicIp?: boolean,
    firewallRule?: string[]
  ) {
    this.idNetwork = idNetwork
    this.securityPolicy = securityPolicy
    this.region = region
    this.publicIp = publicIp
    this.firewallRule = firewallRule
  }

  // Getters
  getIdNetwork (): string {
    return this.idNetwork
  }

  getSecurityPolicy (): string {
    return this.securityPolicy
  }

  getRegion (): string {
    return this.region
  }

  getPublicIp (): boolean | undefined {
    return this.publicIp
  }

  getFirewallRule (): string[] | undefined {
    return this.firewallRule
  }

  // Setters
  setIdNetwork (idNetwork: string): void {
    this.idNetwork = idNetwork
  }

  setSecurityPolicy (securityPolicy: string): void {
    this.securityPolicy = securityPolicy
  }

  setRegion (region: string): void {
    this.region = region
  }

  setPublicIp (publicIp: boolean): void {
    this.publicIp = publicIp
  }

  setFirewallRule (firewallRule: string[]): void {
    this.firewallRule = firewallRule
  }
}
