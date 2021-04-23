import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

export const logIn = async (req, res) => {
  const logInParams = req.body;

  const user = await User.findOne({ email: logInParams.email });
  if (!user) {
    console.log("USER NOT FOUND");
    return res.status(500).json({
      message: "Invalid credentials."
    });
  }

  const passwordMatches = await bcrypt.compare(logInParams.password, user.password);

  if (!passwordMatches) {
    console.log("WRONG PASSWORD")
    return res.status(500).json({
      message: "Invalid credentials."
    })
  }

    // Sign in user with jwt
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), (error, token) => {
      if (error) throw error;
      console.log('Successfully logged in');
      return res.status(200).json({
        token: token,
        user: user,
        loggedIn: true
      });
    })


}
