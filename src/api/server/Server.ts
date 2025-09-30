import express, { Application, Request, Response } from 'express'
import { Routes } from '../routes'
import cors from 'cors'
import morgan from 'morgan'

export class Server {
  private readonly app: Application
  private readonly port: string
  private readonly route: Routes

  constructor () {
    this.app = express()
    this.port = '3000'
    this.route = new Routes()

    this.middlerwares()

    this.routes()
  }

  private middlerwares (): void {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.disable('x-powered-by')
  }

  private routes (): void {
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).json({ message: 'I life' })
    })

    this.app.use('/api', this.route.router)
  }

  public listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto http://localhost:${this.port}`)
    })
  }
}
