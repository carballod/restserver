const { response } = require("express");
const Usuario = require("../models/usuario");

const usuariosGet = (req, res = response) => {

  const {q, nombre, page = "1", limit} = req.query;

  res.json({
    msg: "get API - controller",
    q, nombre, page, limit
  });
};

const usuariosPost = async (req, res = response) => {
  const body = req.body;
  const usuario = new Usuario(body);

  await usuario.save(); // save in DB

  res.status(201).json({
    msg: "post API - controller",
    usuario
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};

