const { render } = require('../app');
const User = require('../models/User');
/** * 
 * @param {*} req => todos los parametros recibidos
 * @param {*} res => Respuestas * 
 */
function create(req, res) {
    var user = new User();
    var params = req.body;
    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.role = params.role;
    //función de errores
    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al ingresar usuario"
                })                
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "usuario almacenado correctamente",
                    dataUser: userCreated
                })                
            }
            
        }
    } )
}

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.idUser;
    User.findByIdAndUpdate(idUser, parameters, (error, userUdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userUdated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al actualizar el usuario"
                })                
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "usuario actualizado correctamente",
                    //dataUser: userCreated
                })                
            }
            
        } 
    } )
}

function remove(req, res) {
    var idUser = req.params.idUser;
    User.findByIdAndDelete(idUser, (error, userRemove) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userRemove) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar el usuario"
                })                
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "usuario eliminado correctamente",
                    //dataUser: userCreated
                })                
            }
            
        }  
    } )
}

function getAllUsers(req, res) {
        var role = req.params.role;
        User.find( { role: role }, (error, allUsers) => {
            if (error) {
                res.status(500).send({        
                    statusCode: 500,
                    message: "Error en el servidor"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Todos los usuarios",
                    allUsers: allUsers
                }) 
            }
    }   )
}   


module.exports = {
    create,
    update,
    remove,
    getAllUsers
}