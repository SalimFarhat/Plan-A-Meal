const mongoose = require('mongoose');
const uri = `mongodb+srv://salimfarhat:mOkWn3aeHd1tl6xP@cluster0.da7ta.mongodb.net/mealsApp?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected')
}).catch(error => console.log(error));