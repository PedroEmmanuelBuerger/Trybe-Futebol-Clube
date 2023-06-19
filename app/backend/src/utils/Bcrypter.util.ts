import * as bcrypt from 'bcryptjs';
import { IBcrypt } from '../Interfaces/IBcrypt';

export default class EncrypterBcryptService implements IBcrypt {
  private bcrypt = bcrypt;

  async compare(password: string, hash: string): Promise<boolean> {
    const isValid = await this.bcrypt.compare(password, hash);
    return isValid;
  }
}
