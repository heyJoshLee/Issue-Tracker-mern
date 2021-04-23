import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

export const createUser = async (req, res) => {
  const userParams = req.body;
  console.log("TRYING TO CREATE A USER");
  try {
    const exsistingUser = await User.findOne({ email: userParams.email });
    console.log(exsistingUser);
    if (exsistingUser) {
      return res.status(500).json({
        message: "User already exsits."
      });
    }

    console.log(userParams);

    const newUser = new User(userParams);
  
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(userParams.password, salt);
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

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id)
    console.log("GOT User")
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
}
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const user_params = req.body;
  console.log(user_params);
  console.log("Looking for User with id")
  console.log(id)
  try {
    const user = await User.findByIdAndUpdate(id, user_params, { new: true})
    console.log("UPDATED User")
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
}
