export interface IBcrypt {
  encrypt(password: string): Promise<string>
  compare(password: string, hash: string): Promise<boolean>
}
