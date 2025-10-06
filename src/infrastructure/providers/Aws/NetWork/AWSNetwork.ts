import { Network } from '../../../../domain/entities/Network'

export class AWSNetwork extends Network {
  private vpcId: string
  private subnet: string
  private IdsecurityGroup: string

  constructor (
    idNetwork: string,
    securityPolicy: string,
    vpcId: string,
    subnet: string,
    IdsecurityGroup: string
  ) {
    super(idNetwork, securityPolicy)
    this.vpcId = vpcId
    this.subnet = subnet
    this.IdsecurityGroup = IdsecurityGroup
  }

  // Getters
  getVpcId (): string {
    return this.vpcId
  }

  getSubnet (): string {
    return this.subnet
  }

  getIdsecurityGroup (): string {
    return this.IdsecurityGroup
  }

  // Setters
  setVpcId (vpcId: string): void {
    this.vpcId = vpcId
  }

  setSubnet (subnet: string): void {
    this.subnet = subnet
  }

  setIdsecurityGroup (IdsecurityGroup: string): void {
    this.IdsecurityGroup = IdsecurityGroup
  }
}
