
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const session = require('express-session');
const HeidiSQLStore = require('express-mysql-session')(session);

AWS.config.update({
  region: 'us-west-2', 
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY'
});

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'TheStoreApp'
};

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  store: new HeidiSQLStore(dbConfig)
}));

// Cart Management
app.get('/cart', (req, res) => {
  // Retrieve the current user's cart from database and send as response
});

app.post('/cart', (req, res) => {
  // Add the specified item to the current user's cart and save to database
});

app.put('/cart/:itemId', (req, res) => {
  // Update the quantity of the specified item in the current user's cart and save to database
});

app.delete('/cart/:itemId', (req, res) => {
  // Remove the specified item from the current user's cart in the database
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
