/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//#region  User
Route.get('/user','UsersController.ListarUser')
Route.post('/user/registrar','UsersController.CreateUser')
Route.put('/user/update','UsersController.UpdateUser')
Route.delete('/user/delete','UsersController.DeleteUser')
//#endregion

//#region Lista de compras
Route.post('/list/create','ListsController.CreateList')
Route.get('/list','ListsController.ListsList')
Route.put('/list/update','ListsController.ListsUpdate')
Route.delete('/list/delete','ListsController.ListsDel')
//#endregion