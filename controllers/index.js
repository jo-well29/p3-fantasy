const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Coder, User } = require("../models");
const SALT_ROUNDS = 11;
const TOKEN_KEY = "ahj";
const signUp = async (req, res) => {
  try {
    // console.log(req.connection)
    console.log(req.body);
    const { name, product, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      name,
      product,
      email,
      password_digest
    });
  
    const payload = {
        id: user.id,
        email: user.email
    }
    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token });
  } catch (error) {
    console.log(
      "You made it to the sign-up controller, but there was an error"
    );
    return res.status(400).json({ error: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (await bcrypt.compare(password, user.dataValues.password_digest)) {
      const payload = {
        id: user.id,
        email: user.email
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token});
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRosterFromUser = async (req, res) => {
    try {
    //   const { user_id } = req.params
      const coders = await Coder.findAll()
      if (coders) {
        return res.status(200).json({ coders })
      }
      return res.status(404).send('User with the specified ID does not exists')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  const getCoderById = async (req, res) => {
    try {
      const { id} = req.params
      const coder = await Coder.findOne({
        where: {
          id: id
        }
      })
      console.log(coder)
      if (coder) {
        return res.status(200).json({ coder })
      }
      return res.status(404).send('Coder with the specified ID does not exists')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
  const getAllCodersByUserId = async (req,res) => {
    console.log("coder")
    try{
      const userRoster = await User.findAll({
        where: {
          id: req.params.id
        },
        include: [{
          model: Coder
        }]
      })
      if (userRoster) {
        return res.status(200).json({ userRoster })
      }
      return res.status(404).send('Coder with the specified ID does not exists')
    }catch(error){
      return res.status(500).send(error.message)
    }
  }

  const updateRoster = async (req,res) => {
    console.log("update feature")
    try {
      console.log(req.params)
      const coder = await Coder.update(
        {
          userId: req.params.id
        },
        {
          
        where: {
          id: req.params.coder_id
        }
      }
      )

      if (coder) {
        return res.status(200).json({ coder })
      }
      return res.status(404).send('Coder with the specified ID does not exists')
      
    }catch(error){
      return res.status(500).send(error.message)
    }
  }
  const trainCoder = async (req,res) => {
    console.log("update feature")
    try {
      console.log(req.params)
      const coder = await Coder.update(
        {
          efficency: req.body.efficency,
          salary: req.body.salary
        },
        {
          
        where: {
          id: req.params.id
        }
      }
      )

      if (coder) {
        return res.status(200).json({ coder })
      }
      return res.status(404).send('Coder with the specified ID does not exists')
      
    }catch(error){
      return res.status(500).send(error.message)
    }
  }

module.exports = {
  signUp,
  signIn,
  getAllUsers,
  getRosterFromUser,
  getCoderById,
  getAllCodersByUserId,
  updateRoster,
  trainCoder

};

