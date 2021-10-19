// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
    async ListarUser({request,response}){
        return User.ListarUser(request.all(),response);
    }
    async CreateUser({request,response}){        
        return User.CreateUser(request.all(),response);
    }
    async UpdateUser({request,response}){
        return User.UpdateUser(request.all(),response);
    }
    async DeleteUser({request,response}){
        return User.DeleteUser(request.all(),response);
    }
}
