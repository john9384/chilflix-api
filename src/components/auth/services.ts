import { IRegister, ILogin } from './types/forms'
import { VSignup, VLogin } from './utils/validators'
import { validateFormData } from '../../lib/utils/validate-form-data'
import { jwtEncode } from '../../lib/helpers/jwt'
import { bcryptCompare, bcryptEncode } from '../../lib/helpers/bcrypt'
import { ValidationError } from '../../lib/helpers/error'
import { BAD_REQUEST } from '../../lib/constants/http-status'
import userRepository from '../user/repository'

export const register = async (formData: IRegister) => {
	validateFormData(VSignup, formData)

	formData.password = await bcryptEncode(formData.password)

	const newUser = await userRepository.createUser(formData)

	return { email: newUser.email }
}

export const login = async (formData: ILogin) => {
	validateFormData(VLogin, formData)

	const user = await userRepository.fetchOneUser({ email: formData.email })

	const passwordValid = await bcryptCompare(
		formData.password,
		user?.password || '',
	)
	if (!passwordValid) {
		throw new ValidationError({
			message: 'Invalid password',
			status: BAD_REQUEST,
		})
	}

	const encodedData = jwtEncode({
		id: user?.id,
		email: user?.email,
		isAdmin: user?.isAdmin,
	})

	return {
		email: user?.email,
		token: encodedData,
	}
}
