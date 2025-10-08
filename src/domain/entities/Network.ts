export abstract class Network {
  protected region: string
  protected securityPolicy: string
  protected pubi

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
