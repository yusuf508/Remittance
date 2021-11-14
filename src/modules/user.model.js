// const {ApiError} = require("../payload/ApiError");
// const db = require("../config/database");
const {ApiError} = require('./../payload/AppError');
const db = require('../config/database');
const { handleAsync } = require('../utils/util');

const users = [{

    firstName:"carab",
    LastName: "Abdi",
    email:"carab@gmail.com",
    age: 19,
    password: "12345"
},
{

    firstName:"Shoib",
    LastName: "Memon",
    email:"Shoib@gmail.com",
    age: 20,
    password: "123"
},
{

    firstName:"ismail",
    LastName: "Ahmed",
    email:"ismail@gmail.com",
    age: 20,
    password: "123"
}
]



//..................../

const getUsers = async () => {
     return await db.executeQuerysingleparam(`select * from users`);

    //return users;
    }

    const getUser = (email) => {


        return users.filter(u => u.email == email);
       }


//get user by emali and password to login

const getUserByEmailAndPassword = async (email, password) => {
let qry = `SELECT * FROM USERS where email='${email}' and password='${password}'`

 console.log(qry);
  return await db.executeQuerysingleparam(qry);

   //return users.filter(u => u.email == email && u.password == password);

   }

   

const create = async (user) => {
//users.push(user);
let userid = user.userid;
let email = user.email;
let password = user.password;
let fullName = user.fullName;
let active = 0;

let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (:userid, :email, :password, :fullName,:active)`
                                        , [userid ,email, password, fullName, active]);
    if (result.rowsAffected === 1)
        return true;

        return false;
}

// update user by using filter with map
const update = async (user) =>{
let userid = user.userid;
let email = user.email;
let password = user.password;
let fullName = user.fullName;
let active = user.active;

    let result = await db.executeQuery(`update users set email=:email, 
    fullname =:fullName,password=:password,active=:active where userid =${userid}`,
    [email,password,fullName,active]);


 if (result.rowsAffected === 1)
        return true;

        return false;

    // new_user = users.filter(u=> u.email == user.email)
    // new_user.map(function (value,index) { 

    //     users[index].firstName = user.firstName;
    //     users[index].LastName = user.LastName;
    //     users[index].age = user.age;
    //     users[index].email = user.email;
    // });
    // return true
}


const deleteuser = async (userid) =>{

console.log(
    userid
);
    let result = await db.executeQuery(`delete  from users  where userid=:userid`,[userid]);
    console.log(
        result
    );

 if (result.rowsAffected === 1)
        return true;

        return false;
    // new_user = users.filter(u=> u.email === email.email)
    // new_user.map(function (value, index){
    //     users.splice(index, 1);
    // });
    // return true;
}



const isEmailExist = async(email) =>{


    let users = await db.executeQuerysingleparam(`select * from users where email = '${email}'`);
    return users;
    // return users.filter(u => u.email===email).length >0;
}



module.exports = {
    create,
    getUser,
   getUsers,
   isEmailExist,
   update,
deleteuser,
getUserByEmailAndPassword 
}