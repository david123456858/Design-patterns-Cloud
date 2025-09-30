import { Cloud } from '../../domain/entities/Cloud'

export class ProviderCloud {
  private readonly methods: Map<string, Cloud>

  constructor () {
    this.methods = new Map([])
  }

  public getProvider (typeProvider: string): Cloud | undefined {
    return this.methods.get(typeProvider)
  }
}
