var express = require('express');
var router = express.Router();
const OrganizationController = require('../controllers/organizationController');
const { check } = require('express-validator');
const RoleValidator = require('../middlewares/roleValidator');
const Validador = require('../middlewares/validator');

router.get('/public', OrganizationController.getAll);
router.post(
  '/public',
  RoleValidator.isAdmin,
  check('name', 'ingresar un nombre valido').optional(),
  check('image', 'ingresar una imagen valida').optional(),
  check('address', 'ingresar una direccion valida').optional(),
  check('phone', 'ingresar un numero valido').optional().isNumeric(),
  check('email', 'ingresar un mail valido').optional().isEmail(),
  check('welcomeText', 'ingresar un texto valido').optional(),
  check('aboutUsText', 'ingresar un texto valido').optional(),
  check('urlFacebook', 'ingresar una direccion valida').optional(),
  check('urlInstagram', 'ingresar una direccion valida').optional(),
  check('UrlLinkedin', 'ingresar una direccion valida').optional(),
  Validador.validateField,
  OrganizationController.updateOrganization
);

module.exports = router;
