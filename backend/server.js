import app from "./src/app.js";

const port = process.env.PORT || 3000;

//Iniciando server
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});