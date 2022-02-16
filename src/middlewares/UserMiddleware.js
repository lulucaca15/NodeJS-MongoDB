const { validate: isUuid } = require("uuid");
const User = require("../models/User");

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ error: "Invalid ID" });
    }

    try {
      const user = await User.findById(id);
      response.user = user;
      if (!user) {
        response.status(404).json({ error: "User not found" });
      }
    } catch (err) {
      return response.status(500).json({ error: err.mesage });
    }

    next();
  },
};
