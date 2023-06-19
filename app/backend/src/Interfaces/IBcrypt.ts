export interface IBcrypt {
  compare(password: string, hash: string): Promise<boolean>
}
