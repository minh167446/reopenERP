const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;
const DepartmentSchema = new Schema ({
    title: { 
        type: String, 
        required: [true, 'Department must have title!']    
    },
    description: { 
        type: String, 
        required: [true, 'Department should have description detail!'] 
    },
    created_at: { type:Date, default: Date.now }
});

DepartmentSchema.plugin(mongoosePaginate);
export default mongoose.model('Department', DepartmentSchema);