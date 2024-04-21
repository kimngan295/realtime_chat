const JWT = require('jsonwebtoken')
const HttpStatus = require('http-status-codes')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized', success: false })
  }

  JWT.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized', success: false })
    }

    req.user = { userId: decoded.userId }
    next()
  })
}

module.exports = authenticateToken
