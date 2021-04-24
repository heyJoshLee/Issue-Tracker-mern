import config from 'config';

const auth = (req, res, next) => {
  // Get token form header
  console.log("CHECKING TOKEN...")
  const token = req.header('x-auth-token');
  console.log("token")
  console.log(req.header('x-auth-token'))
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    next();
  }  catch (error) {
    res.status(401).json({message: "Invalid credentials."});
  }

}
export default auth;