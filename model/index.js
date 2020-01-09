const mongoose=require('mongoose');
// let AlbumsSchema={album_id:Number,album_name: String,public_time:String,week:Number,price:Number,cover:String,singers:[{singer_id:Number,singer_name:String}]};
//
// mongoose.model("Album",AlbumsSchema);

let BookSchema={album_id:Number,album_name: String,public_time:String,week:Number,price:Number,cover:String,singers:[{singer_id:Number,singer_name:String}]};
// let Customer={name:String,password:String,score:Number};

mongoose.model("Book",BookSchema);
// mongoose.model("Customer",Customer);


