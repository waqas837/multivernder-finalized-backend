const mongoose = require("mongoose");

// Check if the connection is already established
if (mongoose.connection.readyState === 1) {
  console.log("Already connected");
} else {
  mongoose
    .connect(
      "mongodb+srv://bughlani:bughlani@cluster0.9qki3lg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ecommerce"
    )
    .then(() => console.log("db connected"))
    .catch((e) => console.log(e))
}
