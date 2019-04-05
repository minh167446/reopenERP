// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const EmployeeSchema = new Schema({
//     hoten: { type: String},
//     email: { type: String, unique: true, lowercase: true},
//     password: { type: String},
//     sdt: { type: Number},
//     avatar: String,
//     ngaysinh: Date,
//     noisinh: String,
//     dantoc: String,
//     tongiao: String,
//     diachithuongtru: String,
//     diachitamtru: String,
//     ngoaingu: String,
//     trinhdotinhoc: String,
//     trinhdovanhoa: String,
//     trinhdohocvan: String,
//     chuyennganh: String,
//     sobaohiem: String,
//     ngaythamgiabh: Date,
//     tknganhang: {
//         tennganhang: String,
//         sotaikhoan: String,
//         ghichu: String,
//         trangthai: Boolean
//     },
//     luong: String, 
//     masothue: String,
//     cmnd: String,
//     noicapcmnd: String,
//     ngaycapcmnd: String,
//     trangthai: Boolean,
//     created_at: { type: Date, default: Date.now }
// });

// EmployeeSchema.pre('save',function(next) {
//     var employee = this;
//     if(!employee.isModified('password'))
//         return next();
//     bcrypt.hash(employee.password,null,null,function(err, hash) {
//         if(err) return next(err);
//         employee.password = hash;
//         next();
//     });
// });

// EmployeeSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password,this.password);
// }

// EmployeeSchema.methods.gravatar = function(size) {
//     if(!this.size) size = 200;
//     if(!this.email) 
//     {
//         return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
//     } else {
//         var md5 = crypto.createHash('md5').update(this.email).digest('hex');
//         return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro';
//     }
// }

// module.exports = mongoose.model('Employee', EmployeeSchema);