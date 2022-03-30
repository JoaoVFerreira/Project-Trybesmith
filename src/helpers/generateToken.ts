import crypto from 'crypto';

function generateToken(): string {
  return crypto.randomBytes(8).toString('hex');
}

export default generateToken;