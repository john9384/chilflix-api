export interface ICreateUser {
	username: string
	email: string
	password: string
}

export interface IUpdateUser {
	username?: string
	email?: string
}

export interface IFetchUser {
	_id?: string
	email?: string
	isAdmin?: boolean
}
