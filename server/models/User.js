const { Schema, model } = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    favorite: [
      {
        type: Schema.Types.ObjectId,
        ref: 'favorite'
      }
    ],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


const Profile = model('Profile', profileSchema);

module.exports = Profile;
