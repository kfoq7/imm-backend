import md5 from 'md5'
import { poolPromise } from '../config/dbSqlConnection'
import { generateJWT } from '../utils/generateJWT'
import type { UserSql, Auth } from '../types'

export const login = async ({ username, password }: Auth) => {
  const query = 'SELECT * FROM usuario WHERE user = ?'
  const [user] = await poolPromise.query<UserSql[]>(query, [username])

  if (user.length === 0) {
    throw new Error('User not found')
  }

  const [userActive] = user.filter(user => user.estado === 1)

  const hashPassword = md5(password)

  if (hashPassword !== userActive.password) {
    throw new Error('Wrong password')
  }

  const token = await generateJWT(userActive.idusuario)

  return {
    token,
    user: userActive
  }
}
