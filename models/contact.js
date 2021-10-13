import mongoose from "mongoose";

// Which syntax do you like; destructuring or no?
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const contactSchema = new Schema({
    country: String,
    message: String,
    name: String,
    telephone: String,
});

const Contact = mongoose.model("contacts", contactSchema);

export default Contact;