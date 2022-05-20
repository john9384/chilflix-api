import { NOT_FOUND, UNAUTHORIZED } from '../../lib/constants/http-status'
import { CustomError } from '../../lib/helpers/error'
import userRepository from './repository'
import { IFetchUser, IUpdateUser } from './types/dtos'
import { IUser } from './types/model'

export const getUsers = async (
	query: IFetchUser,
	isAdmin?: boolean,
): Promise<IUser[]> => {
	if (!isAdmin) {
		throw new CustomError({
			message: 'Unauthorized access',
			status: UNAUTHORIZED,
		})
	}
	const users = await userRepository.fetchUsers(query)

	return users
}
export const updateUser = async (
	query: IFetchUser,
	data: IUpdateUser,
): Promise<IUser | null> => {
	const updatedUser = await userRepository.updateUser(query, data)

	return updatedUser
}

export const getUser = async (query: IFetchUser): Promise<IUser> => {
	const user = await userRepository.fetchOneUser(query)

	if (!user) {
		throw new CustomError({
			message: 'User with id does not exist',
			status: NOT_FOUND,
		})
	}

	return user
}

export const getUserStats = async (query: IFetchUser): Promise<IUser> => {
	// const today = new Date()
	// const latYear = today.setFullYear(today.setFullYear() - 1)
	const user = await userRepository.fetchOneUser(query)

	if (!user) {
		throw new CustomError({
			message: 'User with id does not exist',
			status: NOT_FOUND,
		})
	}

	//  const data = await User.aggregate([
	// 		{
	// 			$project: {
	// 				month: { $month: '$createdAt' },
	// 			},
	// 		},
	// 		{
	// 			$group: {
	// 				_id: '$month',
	// 				total: { $sum: 1 },
	// 			},
	// 		},
	// 	])

	return user
}

export const deleteUser = async (userId?: string): Promise<any> => {
	await userRepository.deleteUser(userId)

	return {
		message: 'user deleted',
	}
}
