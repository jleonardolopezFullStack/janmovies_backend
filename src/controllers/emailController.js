const nodemailer = require("nodemailer");

const getEmail = (req, res) => {
  const { msg } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.HOSTEMAIL,
    port: process.env.PORTEMAIL,
    auth: {
      user: process.env.USEREMAIL,
      pass: process.env.PASSEMAIL,
    },
  });

  let info = transporter.sendMail(
    {
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `${msg}`,
      //html: `<p>Este es el texto del correo electrónico.</p><img src="cid:imagen_adjunta" alt="Imagen adjunta" />`,
      /*       attachments: [
        {
          filename: "qr.jpg", // Coloca aquí el nombre que deseas para la imagen adjunta
          path: path.join(__dirname, "qr.jpg"), // Construye la ruta absoluta de la imagen usando la propiedad __dirname
          cid: "imagen_adjunta", // Usa este ID para referenciar la imagen en el contenido del correo electrónico
        },
      ], */
    },
    function (error, info) {
      if (error) {
        console.log(error);
        return res.status(401).json({ ErrorMessage: `An error has occured` });
      }

      return res
        .status(200)
        .json({ SuccedMessage: "Email sent succesfuly", info });
    }
  );
};

module.exports = { getEmail };
