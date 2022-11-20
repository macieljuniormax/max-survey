import { AccountModel } from '../models/account-models'

type AuthenticantionParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticantionParams) => Promise<AccountModel>
}
