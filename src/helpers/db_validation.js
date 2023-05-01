const User = require("../models/authSchema");

const validateExistEmail = async (email = "") => {
  const emailExist = await User.findOne({ email });

  if (emailExist) {
    throw new Error("This email exist already");
  }
};

const validateNoExistEmail = async (email = "") => {
  const emailExist = await User.findOne({ email });

  if (!emailExist) {
    throw new Error("This email doesnt exist");
  }
};
/* const PasswordCompare = async (email = "") => {
  const passwordExist = await User.findOne({ email });
  console.log(passwordExist.password);

}; */

const validateAdminRole = async (email = "") => {
  const emailExist = await User.findOne({ email });
  console.log(emailExist.rol);
  if (!emailExist || emailExist.rol != "ADMIN_ROLE") {
    throw new Error(
      "This admin doesn't exist already or is not allowed to Login"
    );
  }
};

module.exports = {
  validateExistEmail,
  validateNoExistEmail,
  validateAdminRole,
};
