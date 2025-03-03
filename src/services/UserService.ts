import { User } from '../models/User'

export class UserService {
  private users: User[] = []

  getUsers(): User[] {
    return this.users
  }

  getUser(id: string): User | undefined {
    return this.users.find((user) => user.id === id)
  }

  createUser(user: User): User {
    this.users.push(user)
    return user
  }

  updateUser(id: string, updateUser: Partial<User>): User | undefined {
    const user = this.getUser(id)

    if (!user) return undefined

    Object.assign(user, updateUser)
    return user
  }

  deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (userIndex === -1) return false

    this.users.splice(userIndex, 1)
    return true
  }
}
