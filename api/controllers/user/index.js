import { normalizeObj } from "../../utils/functions";
import { User } from "../../models";
import crypto from "crypto";

const UserController = {
  // get all elemnents
  async getAllUsers(req, res) {
    const all = await User.findAll();
    return res.send({ users: normalizeObj(all) });
  },
};

export default UserController;
