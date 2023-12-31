const axios = require("axios");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await axios.get(
      "http://localhost:3001/api/v1/posts?searchKeyword"
    );

    blogs.data = blogs.data.slice(0, 3);

    res.status(200).json(blogs.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
