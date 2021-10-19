import Database from '@ioc:Adonis/Lucid/Database';
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
export default class User extends BaseModel {
  static async ListarUser(request, response) {
    var user
    try {
      if (request.id) {
        user = await Database.connection('mysql').from('users').where('id_user', request.id);  
        if (user.length > 0) {
          return response.status(200).send({
            message: 'Usuário encontrado',
            data: user
          })
        }else{
          return response.status(400).send({
            message: 'Usuário não encontrado',
            data: user
          })
        }     
      }else{
        user = await Database.connection('mysql').from('users').select('*');
        return response.status(200).send({
          message: 'Usuário encontrado',
          data: user
        })
      }
    } catch (error) {
      return response.status(400).send({
        message: error.message,
      })
    }
  }
  static async CreateUser(request, response) {
    try {
      if (
        request.name == '' || request.last_name == '' ||
        request.email == '' || request.user_admin == '' ||
        request.status == '' || request.password == '') {
          return response.status(400).send({
            message: 'Usuário não pode ser criado pois existem dados inválidos',
            data: []
          })
      }
      await Database.connection('mysql').table('users').insert({
        name: request.name,
        last_name: request.last_name,
        email: request.email,
        user_admin: request.user_admin,
        status: request.status,
        password: request.password,
        token_confirmation: request.token_confirmation,
        token_recover: request.token_recover,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date()
      })
      return response.status(201).send({
        message: 'Usuário criado',
        data: {
          name: request.name,
          last_name: request.last_name,
          email: request.email,
        }
      })
    } catch (error) {
      return response.status(404).send({
        message: error.message       
      })
    }
  }
  static async UpdateUser(request,response){
    try {
      if (
        request.name == '' || request.last_name == '' ||
        request.email == '' || request.user_admin == '' ||
        request.status == '' || request.password == '') {
          return response.status(400).send({
            message: 'Usuário não pode ser criado pois existem dados inválidos',
            data: []
          })
      }
      await Database.connection('mysql').from('users').where('id_user', request.id).update({
        name: request.name,
        last_name: request.last_name,
        email: request.email,
        user_admin: request.user_admin,
        status: request.status,
        password: request.password,
        token_confirmation: request.token_confirmation,
        token_recover: request.token_recover,
        created_at: '',
        updated_at: new Date(),
        deleted_at: ''
      })
      return response.status(201).send({
        message: 'Usuário alterado',
        data: {
          name: request.name,
          last_name: request.last_name,
          email: request.email,
        }
      })
    } catch (error) {
      return response.status(404).send({
        message: error.message       
      })
    }
  }
  static async DeleteUser(request,response){
    console.log(request);
    
    try {
      await Database.connection('mysql').from('users').where('id_user', request.id).delete()
      return response.status(200).send({
        message: 'Usuário deletado'
      })
    } catch (error) {
      return response.status(404).send({
        message: error.message       
      })
    }
  }
}
