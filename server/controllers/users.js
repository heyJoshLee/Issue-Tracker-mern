import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

export const createUser = async (req, res) => {
  const user_params = req.body;

  const exsistingUser = await User.findOne({ email: user_params.email });
  if (exsistingUser) {
    return res.status(500).json({
      message: "User already exsits."
    });
  }

  const newUser = new User(user_params);
  try {
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(user_params.password, salt);
    await newUser.save();
    console.log('User created')

    // Sign in user with jwt
    const payload = {
      user: {
        id: newUser.id
      }
    }
    console.log(payload);

    jwt.sign(payload, config.get('jwtSecret'), (error, token) => {
      if (error) throw error;
      console.log('Successfully logged in');
      return res.status(200).json({
        token: token,
        user: newUser,
        loggedIn: true
      });
    })

  } catch (error) {
    console.log(error.message);
    return res.status(404).json({
      message: error.message
    })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log('Got all users.');
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}