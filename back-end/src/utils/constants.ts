import fs from 'fs';
import path from 'path';

export const SALT_ROUNDS = 10;

export const JWT_SECRET = fs.readFileSync(path.join(__dirname, '../../jwt.key'), 'utf8') || 'secret';

export const SECONDS_OF_A_DAY = 24 * 60 * 60;

// should be a character before the @ and a character after the @
export const EMAIL_REGEX = /^(.+)@(.+)$/;

// name min 2 characters, max 30 characters, any character
export const NAME_REGEX = /^.{4,}$/

// password min 2 characters, max 12, any character 
export const PASSWORD_REGEX = /^.{4,}$/
