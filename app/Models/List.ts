import Database from '@ioc:Adonis/Lucid/Database'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
export default class List extends BaseModel {

  static async CreateList(request, response) {
    try {
      if (request.name_list == '') {
        return response.status(400).send({
          message: 'O nome da lista precisa ser preenchido.'
        })
      }
      await Database.connection('mysql').table('lists').insert({
        name_list: request.name_list,
        merchant_id: request.merchant_id
      })
      return response.status(201).send({
        message: 'Lista criada com sucesso',
        data: {
          name_list: request.name_list
        }
      })
    } catch (error) {
      return response.status(400).send({
        message: error.message
      })
    }
  }

  static async ListarList(request, response) {
    var list
    try {
      if (request.id_list) {
        list = await Database.connection('mysql').from('lists')
          .where('merchant_id', request.merchant_id)
          .where('id_list', request.id_list);
      } else {
        list = await Database.connection('mysql').from('lists').select('*')

      }      
      return response.status(200).send({
        message: list
      })
    } catch (error) {
      return response.status(400).send({
        message: error.message
      })
    }
  }

  static async UpdateList(request, response) {
    try {
      var list
      list = await Database.connection('mysql')
      .from('lists')
      .where('id_list', request.id_list)
      .update({
        name_list: request.name_list,
      })
      return response.status(201).send({
        message: 'Nome da lista atualizada',
        data: request.name_list
      })
    } catch (error) {
      return response.status(400).send({
        message: error.message
      })
    }
  }

  static async DeleteList(request,response){
    try {
      var list
      list = await Database.connection('mysql')
      .from('lists')
      .where('id_list', request.id_list).delete();
      return response.status(200).send({
        message: 'Lista foi deletada'
      })
    } catch (error) {
      return response.status(400).send({
        message: error.message
      })
    }
  }
}
