import config from 'config';
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // Get token form header
  const token = req.header('x-auth-token');
  console.log(req.header('x-auth-token'))
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  }  catch (error) {
    res.status(401).json({message: "Invalid credentials."});
  }

}
export default auth;