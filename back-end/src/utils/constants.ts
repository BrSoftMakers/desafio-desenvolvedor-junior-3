import fs from 'fs';
import path from 'path';

export const SALT_ROUNDS = 10;

// please dont use this secret in production, use a secret that is stored in a .env file or in a secure place
export const JWT_SECRET = fs.readFileSync(path.join(__dirname, '../../../jwt.key'), 'utf8') || 'secret';
