const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://duscarvalho:paçoca2020@clusterteste-rmopt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;