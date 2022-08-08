const express = require("express");
const app = express();
const product = require("./api/product");
const user = require("./api/user");
const getUsers = require("./api/getUsers");
const getModalidades = require("./api/getModalidades");
const getStatuses = require("./api/getStatuses");
const saludo    = require("./api/saludo")
const reg    = require("./api/getRegistros")
const saveUser    = require("./api/saveUser")


// app.use(express.json({extended: false}));
app.use("/api/product", product);
app.use("/api/user", user);
app.use("/api/getUsers", getUsers);
app.use("/api/getModalidades", getModalidades);
app.use("/api/getStatuses", getStatuses);
app.use("/api/saludar", saludo);
app.use("/api/getRegistros", reg);
app.use("/api/saveUser", saveUser);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));





