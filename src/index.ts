/* eslint-disable @typescript-eslint/no-floating-promises */
import 'reflect-metadata'

import { Server } from './api/server/Server'

async function main (): Promise<void> {
  try {
    const server = new Server()
    server.listen()
  } catch (error) {
    console.log('Error al iniciar el servidor:', error)
  }
}

main()
