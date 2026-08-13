# Carrito Full Stack

## Descripción

Este proyecto consiste en una página web de una tienda online con un carrito de compras.

El usuario puede ver diferentes productos, agregarlos al carrito, eliminarlos y ver el total de la compra. Al momento de comprar, el sistema se conecta con un Backend y crea un pago de prueba utilizando Mercado Pago.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* CSS
* Node.js
* Express
* Mercado Pago Developer

## Funcionamiento

El proyecto está dividido en dos partes:

### Frontend

El Frontend está realizado con React.

Desde esta parte se pueden:

* Ver los productos.
* Ver imágenes y precios.
* Agregar productos al carrito.
* Eliminar productos.
* Ver el total.
* Realizar la compra.

### Backend

El Backend está realizado con Node.js y Express.

Su función principal es recibir el total de la compra y comunicarse con Mercado Pago para crear el pago.

## Mercado Pago

Se utilizó Mercado Pago Developer para realizar una integración de prueba.

Cuando el usuario toca el botón **Comprar**, el Frontend envía el total al Backend.

El Backend crea la preferencia de pago y devuelve un enlace.

Finalmente, el usuario es enviado al Checkout de Mercado Pago para realizar la prueba del pago.

## Estructura del proyecto

```text
CarritoFullStack/
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── Backend/
    ├── server.js
    ├── package.json
    └── .env
```

## Instalación

### Frontend

Entrar a la carpeta Frontend y ejecutar:

```bash
npm install
```

Después:

```bash
npm run dev
```

### Backend

Entrar a la carpeta Backend y ejecutar:

```bash
npm install
```

Después:

```bash
node server.js
```

El Backend funciona en:

```text
http://localhost:3000
```

El Frontend funciona normalmente en:

```text
http://localhost:5173
```

## Importante

El archivo `.env` contiene el Access Token de Mercado Pago y no debe subirse a GitHub.

También se recomienda no subir la carpeta `node_modules`, ya que puede volver a generarse ejecutando:

```bash
npm install
```

## Objetivo

El objetivo del proyecto es desarrollar un carrito de compras Full Stack y comprender cómo se comunican el Frontend y el Backend, además de realizar una integración de prueba con una plataforma de pagos.
