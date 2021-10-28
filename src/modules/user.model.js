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

const getUsers = () => {

     return users;
    }

    const getUser = (email) => {


        return users.filter(u => u.email == email);
       }


//get user by emali and password to login
const getUserByemailAndPassword = (email, password) => {


    return users.filter(u => u.email == email && u.password == password);
   }




const create = (user) => {
users.push(user);

return true;
}

// update user by using filter with map
const update = (user) =>{
    new_user = users.filter(u=> u.email == user.email)
    new_user.map(function (value,index) { 

        users[index].firstName = user.firstName;
        users[index].LastName = user.LastName;
        users[index].age = user.age;
        users[index].email = user.email;
    });
    return true
}


const deleteuser = (email) =>{
    new_user = users.filter(u=> u.email === email.email)
    new_user.map(function (value, index){
        users.splice(index, 1);
    });
    return true;
}



const isEmailExist = (email) =>{
    return users.filter(u => u.email===email).length >0;
}



module.exports = {
    create,
    getUser,
   getUsers,
   isEmailExist,
   update,
deleteuser,
getUserByemailAndPassword
}