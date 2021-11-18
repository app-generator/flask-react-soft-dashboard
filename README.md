# [Flask React Soft Dashboard](https://appseed.us/product/flask-react-soft-dashboard)

Start your development with an Innovative Admin Template for **Material-UI** and **React**. Soft UI Dashboard is built with over 70 frontend individual elements, like buttons, inputs, navbars, navtabs, cards or alerts, giving you the freedom of choosing and combining. The product comes with a simple JWT authentication flow: login/register/logout. 

> Features

- Innovative **Material UI** Design - Creafted by [Creative-Tim](https://bit.ly/3fKQZaL)
- React, Redux, Redux-persist
- Authentication: JWT Login/Register/Logout
- **Full-stack Ready** using a **Flask API Server** (open-source project) - Server Features
  - Flask / Flask-RestX / SQLite3 - a simple, easy to use backend
  - Authentication with JWT (login, logout, register)
  - Docker, Unitary tests

> Links

- [Flask React Soft UI Dashboard](https://appseed.us/product/flask-react-soft-dashboard - product page
- [Flask React Soft UI Dashboard](https://flask-react-soft-dashboard.appseed-srv1.com/authentication/sign-in) - LIVE Demo
- Free Support via Github (issues tracker) and [Discord](https://discord.gg/fZC6hup).

<br />

## Quick-start in Docker

> Clone/Download the source code

```bash
$ git clone  https://github.com/app-generator/flask-react-soft-dashboard.git
```

<br />

> Start the Flask API

```bash
$ cd flask-api
$ docker-compose pull   # download dependencies 
$ docker-compose build  # local set up
$ docker-compose up     # start the app 
```

At this point, the API should be up & running at `http://localhost:5000`, and we can test the interface using POSTMAN or `curl`.

<br />

> Start the React UI (using another terminal)

```bash
$ cd react-ui
$ docker-compose pull   # download dependencies 
$ docker-compose build  # local set up
$ docker-compose up     # start the app 
```

Once all the above commands are executed, the `React UI` should be visible in the browser. By default, the app redirects the guest users to authenticate. 
After we register a new user and Sign IN, all the private pages become accessible. 

<br />

![Flask React Soft Dashboard - Open-source full-stack product with Flask API Backend.](https://user-images.githubusercontent.com/51070104/142229301-fb70f20d-913d-496d-822e-e170cc8c8573.gif)

<br >

## General Information

The product is built using a `two-tier` pattern where the React frontend is decoupled logically and physically from the API backend. How to use the product: 

- `Compile and start` the **Flask API Backend**
  - by default the server starts on port `5000`
- `Compile and start` the **React UI**
  - UI will start on port `3000` and expects a running backend on port `5000`
- `Configuration` (Optional)
  - Change the API port
  - Configure the API port used by the React UI to communicate with the backend 

<br />

## Manual build

### Start the Flask API 

```bash
$ cd flask-api
$ 
$ # Create a virtual environment
$ virtualenv env
$ source env/bin/activate
$
$ # Install modules
$ pip install -r requirements.txt
$
$ # Set up the environment
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
$ 
$ # Start the API
$ flask run
```

<br />

### Compile & start the React UI

```bash
$ cd react-ui
$
$ # Install Modules
$ yarn
$
$ # Start for development (LIVE Reload)
$ yarn start 
```

<br />

### Configuration (Optional)

> Change the port exposed by the Flask API

```bash
$ flask run --port=5001
```

Now, the API starts on port `5001`. 

<br />

> Update the API port used by the React Frontend

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

## API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json)

> **Register** - `api/users/register` (**POST** request)

```
POST api/users/register
Content-Type: application/json

{
    "username":"test",
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Login** - `api/users/login` (**POST** request)

```
POST /api/users/login
Content-Type: application/json

{
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Logout** - `api/users/logout` (**POST** request)

```
POST api/users/logout
Content-Type: application/json
authorization: JWT_TOKEN (returned by Login request)

{
    "token":"JWT_TOKEN"
}
```

<br />

## Product UI

> **Flask React Soft UI Dashboard** - Login 

![Flask React Soft UI Dashboard - Login.](https://user-images.githubusercontent.com/51070104/142229429-c3a3d8eb-f535-4d0c-9a01-e59bc74e08db.png)

<br />

> **Flask React Soft UI Dashboard** - User Profile

![Flask React Soft UI Dashboard - User Profile](https://user-images.githubusercontent.com/51070104/142229572-a313ac1c-e798-49cc-a86c-2e0ab9ead00a.png)

<br />

## Links & Resources

- Ask for [Support](https://appseed.us/support) on [Discord](https://discord.gg/fZC6hup)
- See for [React Starters](https://appseed.us/apps/react) - index provided by AppSeed

<br />

---
**[Flask React Soft UI Dashboard](https://appseed.us/product/flask-react-soft-dashboard** - Open-source full-stack seed project provided by **AppSeed [App Generator](https://appseed.us/)**
