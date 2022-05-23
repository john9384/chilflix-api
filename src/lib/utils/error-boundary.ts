import { INext, IRequest, IResponse } from '../../app/types/http'

function catchErrors(fn: any) {
	return (req: IRequest, res: IResponse, next: INext) =>
		Promise.resolve(fn(req, res, next)).catch(next)
}

export default catchErrors
