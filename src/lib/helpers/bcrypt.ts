import bcrypt from 'bcrypt'

export const bcryptEncode = async (text: string): Promise<string> =>
	bcrypt.hash(text, 10)

export const bcryptCompare = async (
	text: string,
	hash: string,
): Promise<boolean> => bcrypt.compare(text, hash)
