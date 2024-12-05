import User from "../models/users.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "hello world" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    console.error("User ID mismatch:", req.user.id, req.params.id);
    return next(errorHandler(401, "you can only update your own account !"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avathar: req.body.avathar,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "you can only delete your own account"));
  try {
    await User.findByIdAndDelete(req.user.id);
    res.clearCookie('access-token')
    res.status(200).json("user has been deleted");
  } catch (error) {
    next(error);
  }
};

