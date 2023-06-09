const { Categoria } = require("../models");

const existeCategoria = async (id) => {
  const categoria = await Categoria.findById(id);
  if (!categoria) throw new Error(`El id ${id} no existe`);
};

module.exports = {
  existeCategoria,
};
