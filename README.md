<h1 align="center">Benefide test</h1>


This repos means to fulfilled benefide.id x gadjian.com technical test


<div align="center"> <img src="https://img.shields.io/github/watchers/ajedkrap/benefide-test?style=social" alt="watchers"/> <img src="https://img.shields.io/github/last-commit/ajedkrap/benefide-test" alt="last-commit" /> </div>


## Built With

* [Node JS](https://nodejs.org/) - The server-side JavaScript runtime environment.
![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)
* [Express JS](https://expressjs.com/) - The web application framework 
![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)


## Build Setup
 
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Open API folder and Turn on Web Server `cd api && nodemon`
5. Turn on MySQL server using Third-party tool like xampp, etc.
6. Create a database with the name library, 
7. Open Postman desktop application or Chrome web app extension that has installed before
8. Choose HTTP Method and enter request url.(ex. localhost:3000/)
9. You can see all the end point [here](#end-points)


## Set up .env file
Open .env.example file and create new .env file on your favorite code editor, and copy paste this code below :
```
APP_PORT=8080
APP_URL=http://localhost:8080/

DB_HOST=localhost
DB_USER=root
DB_PASS= 
DB_NAME=benefide
```


## End Points

### Employee Routes

- **GET** Get All Employees Endpoint Path: ```api/employees?search&sort&page&limit``` 
  ##### [Get All Employees Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Get%20All%20Employees)
 
- **GET** Get Employee By Id Endpoint Path: ```api/employees/:id``` 
  ##### [Get Employee By Id Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Get%20Employee%20By%20Id)
 
- **POST** Create Employee Endpoint Path: ```api/employees```
  ##### **Output**
  -  ```message : "New Employee Recorded"```
  -  ```data : { "id": XX, "name": "Andi Wijaya", "phone_number": "081239483012", "job_title": "Dokter Gigi" }```
  ##### [Create Employee Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Create%20Employee)
  
- **PUT** Update Books Endpoint Path: ```api/employees/:id``` 
  ##### **Output**
  -  ```message : "Employee No.XX Updated"```
  -  ```data : { "id": XX, "name": "Andi Wijaya", "phone_number": "081239483012", "job_title": "Dokter Hewan" }```
  ##### [Update Employee Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Update%20Employee)
  

- **DELETE** Books Endpoint Path: ```api/employees/:id```
  ##### **Output**
  -  ```message : "Employee No.XX Deleted"```
  ##### [Delete Employee Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Delete%20Employee)

### Other Routes

- **POST** Combination Function Endpoint Path: ```api/combination```
  ##### **Output**
  -  ```message : "Combination Success"```
  -  ```data : { "input": { "r" : "3" , "n" : "10" }, "result" : 120 }```
  ##### [Combination Function Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Combination)

- **POST** Fibonacci Function Endpoint Path: ```api/fibonacci```
  ##### **Output**
  -  ```message : "Fibonacci Success"```
  -  ```data : { "input": { "n" : "14" } , "result" : "0 1 1 2 3 5 8 13 21 34 55 89 144 233" }```
  ##### [Fibonacci Function Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Fibonacci)

- **POST** Reverse Function Endpoint Path: ```api/reverse```
  ##### **Output**
  -  ```message : "Reverse Success"```
  -  ```data : { input: { "character" : "abcdefgh012345!@#$%^" }, "result" :"^%$#@!543210hgfedcba" }```
  ##### [Reverse Function Screenshots](https://github.com/ajedkrap/benefide-test/tree/master/Screenshots/Reverse)


