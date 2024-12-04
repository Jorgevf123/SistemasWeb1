// routes/terminos.js
const express = require('express');  // Importa express
const router = express.Router();  // Define el router
router.get('/', (req, res) => {
  const privacyPolicy = "Política de privacidad aquí...";
  const termsOfUse = "Términos de uso aquí...";
  const dataProtectionLaw = "Ley de protección de datos aquí...";
  const privacyNotice = "Aviso de privacidad aquí...";

  res.render('tyc', {
      privacyPolicy,
      termsOfUse,
      dataProtectionLaw,
      privacyNotice
  });
});
module.exports = router;  // Asegúrate de exportar el router