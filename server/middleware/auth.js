import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // Get token form header
  const token = req.header('x-auth-token');
  try {
    // IS TOKEN VALID?
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // IF SO, PASS USER TO REQ OBJECT
    req.user = decoded.user;
    next();
  }  catch (error) {
    res.status(401).json({message: "Invalid credentials."});
  }

}
export default auth;