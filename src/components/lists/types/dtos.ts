export interface ICreateList {
	title: string
	genre: string
	content: string
}
export interface IUpdateList {
	title?: string
	genre?: string
	content?: string
}
export interface IQueryList {
	id?: string
	title?: string
	genre?: string
	type?: string
}
