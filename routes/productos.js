const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos, validarJWT, esAdminRole } = require("../middlewares/index");
const { obtenerProductos, obtenerProducto, crearProducto, actualizarProducto, borrarProducto } = require("../controllers/productos");
const { existeProductoPorId } = require("../helpers/db-validators");
const { existeCategoria } = require("../helpers/categoria-validators");

const router = Router();

router.get("/", obtenerProductos)

router.get("/:id", [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], obtenerProducto)

router.post("/", [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mongo').isMongoId(),
    check('categoria').custom(existeCategoria),
    validarCampos
], crearProducto)

router.put("/:id", [
    validarJWT,
    // check('categoria', 'No es un id de Mongo').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], actualizarProducto)

router.delete("/:id", [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], borrarProducto)


module.exports = router;