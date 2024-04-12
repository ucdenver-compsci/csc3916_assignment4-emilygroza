var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
var reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    username: String,
    review: String,
    rating: { type: Number, min: 0, max: 5 }
  });

  Order.aggregate([
    {
      $match: { _id: orderId } // replace orderId with the actual order id
    },
    {
      $lookup: {
        from: "items", // name of the foreign collection
        localField: "items", // field in the orders collection
        foreignField: "_id", // field in the items collection
        as: "itemDetails" // output array where the joined items will be placed
      }
    }
  ]).exec(function(err, result) {
    if (err) {
      // handle error
    } else {
      console.log(result);
    }
  });
  

// return the model
module.exports = mongoose.model('Review', reviewSchema);