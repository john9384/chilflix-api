export interface ICreateMovie {
	title: string
	desc: string
	img: string
	imgTitle: string
	imgSm: string
	trailer: string
	video: string
	year: string
	limit?: number
	genre: string
	isSeries: boolean
}
export interface IUpdateMovie {
	title?: string
	desc?: string
	img?: string
	imgTitle?: string
	imgSm?: string
	trailer?: string
	video?: string
	year?: string
	limit?: number
	genre?: string
	isSeries?: boolean
}
export interface IQueryMovie {
	id?: string
	title?: string
	year?: string
	limit?: number
	genre?: string
	isSeries?: boolean
	rand?: boolean
	type?: string
}
