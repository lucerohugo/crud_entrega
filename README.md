🦄🛒 Unicorns y Products App
Aplicacion de gestion de Unicornios y Productos realizada con React, React Router, Context API, Formik, Yup y PrimeReact.

📂 Mi estructura del Proyecto

src/
├── context/
│   └── UnicornContext.jsx       #esto contiene todo lo relacionado al manejo global de unicornios
│
├── unicorns/
│   ├── index.jsx                #esto define las rutas relacionadas a unicornios
│   ├── UnicornsView.jsx         #tabla de lectura y botones de borrado
│   ├── UnicornForm.jsx          #formulario compartido para crear y editar
│   ├── useUnicornForm.js        #hook con lógica del formulario (opcional)
│
├── products/
│   ├── index.jsx                #defino rutas de productos
│   ├── ProductsView.jsx         #lista de productos
│   ├── ProductForm.jsx          #crea nuevos productos
│   └── productsData.js          #array local de productos 
│
└── App.jsx                      #ruteo global de unicorns y products

🚀 Instalacion
1. Clona el repositorio:
git clone https://github.com/lucerohugo/crud_entrega
2. Entra en el proyecto:
cd crud_entrega
3. Instala las dependencias:
npm install primereact, formik + yup
4. Inicia el proyecto:
npm run dev
o
npm start

🛠️ Lo utilizado
- React
- React Router DOM
- Context API
- Formik + Yup
- PrimeReact
- LocalStorage 

🛒 Modulo de Productos

- ProductsView: listado de productos.
- ProductForm: formulario para agregar productos.
- productsData: array local de productos.
- Manejo de estado local (sin Context).
- Rutas específicas:
  - /productos → Vista principal de productos

👨🏽‍🦲 Hugo Lucero - TP entrega
pd: no pude hacer andar el yup para campos obligatorios, ejem: no utilizar letras en donde van numeros como en edad etc.Lo demas anda todo y quizas se podrian pulir algunas cosas.