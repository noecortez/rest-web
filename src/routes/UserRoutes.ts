import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { UserService } from '../services/UserService'

export class UserRoutes {
  private router: Router
  private userController: UserController

  constructor() {
    this.router = Router()
    const userService = new UserService()
    this.userController = new UserController(userService)

    this.initRoutes()
  }

  private initRoutes(): void {
    this.router.get(
      '/',
      this.userController.getAllUsers.bind(this.userController)
    )
    this.router.get(
      '/:id',
      this.userController.getUser.bind(this.userController)
    )
    this.router.post(
      '/',
      this.userController.createUser.bind(this.userController)
    )
    this.router.put(
      '/:id',
      this.userController.updateUser.bind(this.userController)
    )
    this.router.delete(
      '/:id',
      this.userController.deleteUser.bind(this.userController)
    )
  }

  getRouter(): Router {
    return this.router
  }
}
