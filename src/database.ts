import mongoose from 'mongoose';

const MONGOURI = 'mongodb+srv://gusparr28:27284401g@practicing.xxeu5.mongodb.net/wunderlist-clon-moviles?retryWrites=true&w=majority';

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});
