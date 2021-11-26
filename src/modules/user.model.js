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
    let result = await db.executeQuerysingleparam(`SELECT *  FROM USERS`);
  //  console.log(result);
    return result ;
}

const getUser = async (email) => {
  //  return users.filter(u => u.email === email);
  console.log(email);
  return await db.executeQuerysingleparam(`  SELECT *  FROM USERS where Email=:${email}`);

}

const getUserByEmailAndPassword = async (email, password) => {
    let result =await db.executeQuery(`SELECT U.USERID, U.FULLNAME, U.EMAIL,password,  R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userId
             INNER JOIN ROLES R on UR.roleId = R.ROLEID
    WHERE EMAIL = :email
      AND PASSWORD = :password
      AND ACTIVE = 1`, [email, password]);
      console.log(result);


    // let result = await db.executeQuery(`SELECT U.USERID, U.FULLNAME, U.EMAIL,password, R.ROLENAME
    //                                     FROM USERS U
    //                                              INNER JOIN USERROLE UR on U.USERID = UR."userId"
    //                                              INNER JOIN ROLES R on UR."roleId" = R.ROLEID
    //                                     WHERE EMAIL = :email
    //                                       AND PASSWORD = :password
    //                                       AND ACTIVE = 1`, [email, password])

    if (!result)
        return null;

    return result[0];
}

const create = async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 0;

    let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (USER_SEQ.nextval, :email, :password, :fullName,:active)`
                                        , [email, password, fullName, active]);
    if (result.rowsAffected === 1)
        return true;

    return false;
}

const isEmailExist = (email) => {
    return users.filter(u => u.email === email).length > 0;
}




/*   
money Transfer Functions start here 

*/



const getCountries = async () => {
    return await db.executeQuerysingleparam(`select * from country`);

   //return users;
   }
 
   const getStates = async () => {
    return await db.executeQuerysingleparam(`select * from state`);

   //return users;
   }
   const getCity = async () => {
    return await db.executeQuerysingleparam(`select * from cities`);

   //return users;
   }
  // getcurrency

  const getcurrency = async () => {
    return await db.executeQuerysingleparam(`select * from currencies`);

   //return users;
   }






module.exports = {
   
 getCountries ,
 getStates ,
 getCity ,
 getcurrency,
 isEmailExist ,
 create,
 getUserByEmailAndPassword,
 getUser ,
 getUsers

}