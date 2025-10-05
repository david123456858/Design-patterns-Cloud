import { Cloud } from '../../domain/entities/Cloud'
import { AWS } from './Aws/AWS'
import { AZURE } from './Azure/Azure'
import { GCP } from './Google/GCP'
import { OnPromise } from './OnPromise/OnPromise'

// eleccion de fabricas segun el tipo

export class ProviderCloud {
  private readonly methods: Map<string, Cloud>

  constructor () {
    this.methods = new Map([['AWS', new AWS()], ['AZURE', new AZURE()], ['GCP', new GCP()], ['OnPromise', new OnPromise()]])
  }

  public getProvider (typeProvider: string): Cloud | undefined {
    return this.methods.get(typeProvider)
  }
}
