const express = require("express")
const cors = require("cors")
require("dotenv").config()

const { MercadoPagoConfig, Preference } = require("mercadopago")

const app = express()

app.use(cors())
app.use(express.json())

const client = new MercadoPagoConfig({
    accessToken: process.env.TOKEN
})

app.post("/crear-pago", async (req, res) => {

    const preference = new Preference(client)

    const resultado = await preference.create({
        body: {
            items: [
                {
                    title: "Compra de productos",
                    quantity: 1,
                    unit_price: req.body.total
                }
            ]
        }
    })

    res.json({
        link: resultado.init_point
    })
})
app.listen(3000, () => {
    console.log("Servidor funcionando")
})