import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://oziomaegole:Oziblink2846@cluster0.ylza3vt.mongodb.net/"
  );
  console.log("DB Connected");
};
