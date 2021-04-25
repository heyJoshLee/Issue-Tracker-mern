import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const logIn = async (req, res) => {
  const logInParams = req.body;
  const emailParams = logInParams.email.toLowerCase();
  console.log(emailParams)

  const user = await User.findOne({ email: emailParams });
  if (!user) {
    console.log("USER NOT FOUND");
    res.status(501).json({
      message: "Invalid credentials."
    });
  }

  const passwordMatches = await bcrypt.compare(logInParams.password, user.password);

  if (!passwordMatches) {
    console.log("WRONG PASSWORD")
    return res.status(400).json({
      message: "Invalid credentials."
    })
  }

    // Sign in user with jwt
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, process.env.JWT_SECRET, (error, token) => {
      if (error) throw error;
      console.log('Successfully logged in');
      return res.status(200).json({
        token: token,
        user: user,
        loggedIn: true
      });
    })
}
