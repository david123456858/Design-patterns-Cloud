import { Cloud } from '../../domain/entities/Cloud'
import { AWS } from './Aws/AWS'
import { AZURE } from './Azure/Azure'
import { GCP } from './Google/GCP'
import { OnPromise } from './OnPromise/OnPromise'

// eleccion de fabricas segun el tipo

export class ProviderCloud {
  private readonly methods: Map<string, Cloud>

  constructor () {
    const providers: Array<[string, Cloud]> = [
      ['AWS', new AWS()],
      ['AZURE', new AZURE()],
      ['GCP', new GCP()],
      ['OnPromise', new OnPromise()]
    ]

    this.methods = new Map(providers)
  }

  public getProvider (typeProvider: string): Cloud | undefined {
    return this.methods.get(typeProvider)
  }
}
