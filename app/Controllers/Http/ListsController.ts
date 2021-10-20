// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import List from "App/Models/List";
import {schema} from '@ioc:Adonis/Core/Validator'
export default class ListsController {
    async CreateList({request,response}){
        const list = schema.create({
            name_list: schema.string({escape: true,trim:true}),
            merchant_id: schema.string({escape: true,trim:true}),

        })
        const message = {
            'name_list.required': 'Preencha o nome da lista',
            'merchant_id.required': 'Ops, parace que ocorreu um erro do nosso lado. Tente novamente'
        }
        await request.validate({
            schema: list,
            messages: message
          })
        return List.CreateList(request.all(),response);
    }
    async ListsList({request,response}){
        return List.ListarList(request.all(),response);
    }
    async ListsUpdate({request,response}){
        return List.UpdateList(request.all(),response);
    }
    async ListsDel({request,response}){
        const list = schema.create({
            id_list: schema.number(),

        })
        const message = {
            'id_list.required': 'Ops, parace que ocorreu um erro do nosso lado. Tente novamente'
        }
        await request.validate({
            schema: list,
            messages: message
          })
        return List.DeleteList(request.all(),response)
    }
}
