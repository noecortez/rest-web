import express from 'express'
import { UserRoutes } from './routes/UserRoutes'

export class Server {
  private app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  private config(): void {
    this.app.use(express.json())
  }

  private routes(): void {
    const router = express()
    const userRoutes = new UserRoutes()

    this.app.use('/api/v1', router)
    router.use('/users', userRoutes.getRouter())
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  }
}
