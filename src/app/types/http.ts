import { Request, Response, NextFunction } from 'express'
import { IPayload } from './jwt-types'

export interface IRequest extends Request {
	user?: IPayload
}

export interface IResponse extends Response {}

export interface INext extends NextFunction {}
