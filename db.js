module.exports = require('mongoose')
  .connect(
    require('./config/keys').mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  )
  .then(() => console.log('Connected To MongoDB'))
  .catch(err => console.log(err))