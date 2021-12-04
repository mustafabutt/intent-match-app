                        Instructions

Make sure you have installed Nodejs.
Clone the source code and run the following commands in to the root directory. 

npm install <br/>
npm run start


Now open postman and make a get request on the following URL tp get all users list.

http://localhost:3000/users

Tp test the match end point make the post request on the following URL.

Request body = {
               	"username": "tim",
                "age": 19,
                "race": "black",
                "gender": "male",
                "location": "usa",
                "hobbies": ["reading"],           
                "interest": "female"
               }
               
               

