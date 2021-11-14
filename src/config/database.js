const oracledb = require('oracledb');
const { param } = require('../router/v1/user.root');
const util = require("../utils/util");

const host ='DESKTOP-VSJOIOD';
const database ='xe';
const username ='hr';
const password ='hr';



oracledb.initOracleClient({libDir:'C:\\Users\\yuusuf\\Downloads\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3'});

async function checkconnection(){

try{
   // oracledb.initOracleClient({libDir:'C:\\Users\\yuusuf\\Downloads\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3'});
    // let connection ;
    
    connection = await oracledb.getConnection({
        user : username,
        password: password,
        connectString : host + '/' + database
        
            });
        
            console.log("connected to database seccessfully");
            return  await connection;

}catch(err){
    console.error(err);

}

   
}

checkconnection();

const executeQuery = async (query, params) => {
    let connection;
    try {

        connection = await oracledb.getConnection({
            username: username,
            password: password,
            connectString: host + '/' + database
        });

        let result = await connection.execute(query,params);
        connection.commit();

        return util.parseDatabaseObject(result)

    } catch (err) {
        console.log(`Error from database: ${err}`)
        return null;
    } }






  const executeQuerysingleparam = async (query) => {
       
        try {
    
            connection = await checkconnection();
                let result = await connection.execute(query);
                connection.commit();
        
                return util.parseDatabaseObject(result)
            }
    
            
    
         catch (err) {
            console.log(`Error from database: ${err}`)
            return null;
        }
    
    }
    

module.exports = {
    executeQuery, 
    executeQuerysingleparam
}