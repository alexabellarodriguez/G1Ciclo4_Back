const Categoria = require("../models/categoria");

//req es lo que podemos leer desde postman
// res el lo que enviamos hacia postman

exports.leerCategoria = async ( req, res ) => {
    try{
        const categoria = await Categoria.find({ creador: req.usuario.id});
        res.json({ categoria });
    }catch(error){
        console.log(error);
    }


}
exports.crearCategoria = async ( req, res ) => {
    try{
        const categoria = new Categoria(req.body);

        categoria.creador = req.usuario.id;

        categoria.save();

        res.json(categoria);
    }catch(error){
        console.log(error);
    }

};
exports.actualizarCategoria = async ( req, res ) => {
    const { id } = req.params;

    const categoria = await Categoria.findById(id);

    if(!categoria){
        return res.status(400).json({msg:"categoria no encontrada"});
    }

    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg: "acción no valida para este usuario"});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;

    categoria.save();
    res.json({ categoria});



}
exports.borrarCategoria = async ( req, res ) => {
    try{
        await Categoria.deleteOne({_id: req.params.id});
        res.json({msg : "categoria eliminada"});
    }catch(error){
        console.log(error);
    }
}