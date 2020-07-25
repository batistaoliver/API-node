const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProducSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required:true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

ProducSchema.plugin(mongoosePaginate);
mongoose.model('Product',ProducSchema);