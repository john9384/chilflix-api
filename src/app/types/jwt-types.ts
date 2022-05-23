import { JwtPayload } from 'jsonwebtoken'

export interface IPayload {
	id?: string
	email?: string
	isAdmin?: boolean
}
