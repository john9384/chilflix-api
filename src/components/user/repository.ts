import User from './model'
import { ICreateUser, IUpdateUser, IFetchUser } from './types/dtos'
import { IUser } from './types/model'

import BaseRepository from '../../db/repository/BaseRepository'

class UserRepository extends BaseRepository {
	fetchUsers = async (query: IFetchUser): Promise<IUser[] | []> => {
		const user: IUser[] = await this.fetch<IFetchUser, IUser[]>(query)

		return user
	}

	fetchOneUser = async (query: IFetchUser): Promise<IUser | null> => {
		const user = await this.fetchOne<IFetchUser, IUser>(query)

		return user
	}

	createUser = async (data: ICreateUser): Promise<IUser> => {
		const newUser = await this.create<ICreateUser, IUser>(data)
		return newUser
	}

	updateUser = async (
		query: IFetchUser,
		data: IUpdateUser,
	): Promise<IUser | null> => {
		const updatedUser = await this.update<IFetchUser, IUpdateUser, IUser>(
			query,
			data,
		)

		return updatedUser
	}

	deleteUser = async (id?: string) => this.destroy(id)
}

const userRepository = new UserRepository(User)

export default userRepository
