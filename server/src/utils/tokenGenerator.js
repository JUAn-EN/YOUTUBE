const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_secreta';

function generarToken(usuario) {
  const payload = {
    nombre_usuario: usuario.nombre_usuario,
    id_usuario: usuario.id
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: '2h'});

  return token;
}

module.exports = generarToken;
