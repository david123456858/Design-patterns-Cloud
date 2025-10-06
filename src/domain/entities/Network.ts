export abstract class Network {
  protected idNetwork: string
  protected securityPolicy: string

  constructor (idNetwork: string, securityPolicy: string) {
    this.idNetwork = idNetwork
    this.securityPolicy = securityPolicy
  }

  // Getters
  getIdNetwork (): string {
    return this.idNetwork
  }

  getSecurityPolicy (): string {
    return this.securityPolicy
  }

  // Setters
  setIdNetwork (idNetwork: string): void {
    this.idNetwork = idNetwork
  }

  setSecurityPolicy (securityPolicy: string): void {
    this.securityPolicy = securityPolicy
  }
}
