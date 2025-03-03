import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { User } from '../models/User'
import { randomUUID } from 'crypto'

export class UserController {
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  getAllUsers(request: Request, response: Response): void {
    const users = this.userService.getUsers()

    if (users.length === 0) {
      response.status(404).json({
        message: 'No se encontraron usuarios',
        data: users,
      })
      return
    }

    response.status(200).json({
      message: 'Usuarios encontrados',
      data: users,
    })
  }

  getUser(request: Request, response: Response): void {
    const id = request.params.id

    const user = this.userService.getUser(id)
    if (!user) {
      response.status(404).json({
        message: 'No se encontro el usuario',
        data: user,
      })
      return
    }

    response.status(200).json({
      message: 'Usuario encontrado',
      data: user,
    })
  }

  createUser(request: Request, response: Response): void {
    const user: User = request.body
    const { id, ...userWithoutId } = user

    const userExists = this.userService.getUser(id)
    if (userExists) {
      response.status(400).json({
        message: 'El usuario ya existe',
        data: user,
      })
      return
    }

    const createdUser = this.userService.createUser({
      id: randomUUID(),
      ...userWithoutId,
    })

    response.status(201).json({
      message: 'Usuario creado',
      data: createdUser,
    })
  }

  updateUser(request: Request, response: Response): void {
    const id = request.params.id
    const updatedUser: Partial<User> = request.body

    const user = this.userService.updateUser(id, updatedUser)
    if (!user) {
      response.status(404).json({
        message: 'No se encontro el usuario',
        data: user,
      })
      return
    }

    response.status(200).json({
      message: 'Usuario actualizado',
      data: user,
    })
  }

  deleteUser(request: Request, response: Response): void {
    const id = request.params.id

    const deletedUser = this.userService.deleteUser(id)
    if (!deletedUser) {
      response.status(404).json({
        message: 'No se encontró el usuario',
        data: deletedUser,
      })
      return
    }

    response.status(204).json({
      message: 'Usuario eliminado',
      data: deletedUser,
    })
  }
}
