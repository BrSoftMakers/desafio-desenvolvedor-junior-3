const app = require('./app');

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
