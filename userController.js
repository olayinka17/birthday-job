const User = require("./model/user");

const register = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "fail",
      message: "an error occured",
    });
  }
};

module.exports = register
