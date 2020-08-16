import mongoose from 'mongoose';

const SampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  value: {
    type: Number,
    default: 0,
    validate: (value: number): any => {
      if (value < 0) throw new Error("Negative values aren't real.");
    },
  },
});

const SampleModel = mongoose.model('Sample', SampleSchema);

export default SampleModel;
