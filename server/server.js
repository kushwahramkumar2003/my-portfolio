const app = require("./src/app.js");
const { connectDB } = require("./src/services/connectDB.js");
const config = require("./src/config/index.js");
const { cloudnairyconnect } = require("./src/config/cloudinary.js");
//create a method

//run this method

(async () => {
  try {
    await connectDB(); //connect to DB
    await cloudnairyconnect(); //connect to cloudinary
    app.on("error", (err) => {
      // error handling
      console.error("Error : ", err);
      throw err;
    });

    const port = process.env.PORT || 5000;

    app.listen(config.PORT, () =>
      //listen to port
      console.log(`Server running on port ${port} 🔥`)
    );
  } catch (error) {
    console.log("Error ---> ", error);

    throw error;
  }
})();
