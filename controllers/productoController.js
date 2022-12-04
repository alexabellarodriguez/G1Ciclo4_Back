const producto = require("../models/producto");

exports.leerProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto leer Producto"});
}
exports.crearProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto crear Producto"});
}
exports.actualizarProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto actualizar Producto"});
}
exports.borrarProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto borrar Producto"});
}