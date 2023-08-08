import jwt from 'jsonwebtoken'

export const generateJWT = (id: number) => {
  return new Promise((resolve, reject) => {
    const payload = { userId: id }

    const secretKey = process.env.SECRET_KEY

    if (secretKey === undefined) {
      reject(new Error('Must be provide a secret key'))
      return
    }

    jwt.sign(
      payload,
      secretKey,
      {
        expiresIn: '1d'
      },
      (err, token) => {
        if (err) {
          reject(new Error('Cannot generate token'))
        } else {
          resolve(token)
        }
      }
    )
  })
}
