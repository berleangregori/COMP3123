const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const fs = require('fs');

app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});



/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ message: 'Error reading user data' });
      }
      res.json(JSON.parse(data));
  });
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const { username, password } = req.body; 

  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ message: 'Error reading user data' });
      }

      let user;
      try {
          user = JSON.parse(data);
      } catch (parseErr) {
          return res.status(500).json({ message: 'Error parsing user data' });
      }

      if (user.username !== username) {
          return res.json({
              status: false,
              message: "User Name is invalid"
          });
      }

      if (user.password !== password) {
          return res.json({
              status: false,
              message: "Password is invalid"
          });
      }

      res.json({
          status: true,
          message: "User is valid"
      });
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} succesfully logged out.</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.use('/', router);


app.listen(process.env.PORT || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));