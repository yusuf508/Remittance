
class AppError extends Error{
    constructor(status, messsage, error){
         super(error)
         this.status = status;
         this.messsage  =messsage; 
         this.error  = error
    }
}

module.exports = {
    AppError
}