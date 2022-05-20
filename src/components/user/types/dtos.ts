export interface ICreateUser {
	username: string
	email: string
	password: string
}

export interface IUpdateUser {}

export interface IFetchUser {
	id?: string
	email?: string
	isAdmin?: boolean
}
