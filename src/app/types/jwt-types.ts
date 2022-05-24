import { JwtPayload } from 'jsonwebtoken'

export interface IPayload {
	_id?: string
	id?: string
	email?: string
	isAdmin?: boolean
}
