const navButton = document.querySelector(".nav-btn");
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector("aside");
const wrapper = document.querySelector(".page");
const notificationsIcon = document.querySelector(".notifications-icon");
const notificationsMenu = document.querySelector(".notifications-menu");
const notificationCount = document.querySelector(".notification-count");
const profileBtn = document.querySelector(".btn-profile");
const dropdownProfile = document.querySelector(".dropdown-menu");
const dashboardBtn = document.getElementById("dashboard-btn");
const puntoVentaBtn = document.querySelector("#puntoVenta-btn");
const clientesBtn = document.querySelector("#clientes-btn");
const facturasBtn = document.querySelector("#facturas-btn");
const inventariosBtn = document.querySelector("#inventarios-btn");
const configBtn = document.querySelector("#config-btn");
const dashboardSection = document.querySelector(".dashboard");
const puntoVentaSection = document.querySelector(".punto-venta");
const clientesSection = document.querySelector(".clientes");
const facturacionSection = document.querySelector(".facturacion");
const inventariosSection = document.querySelector(".inventarios");
const configuracionSection = document.querySelector(".configuracion");
const navTitleText = document.querySelectorAll(".nav-title");


//================== show/hide sidebar ==================//
navButton.addEventListener("click", function () {
  navbar.classList.toggle("maximized");

  if (navbar.classList.contains("maximized")) {
    navbar.style.width = "15rem"; // Ancho completo de la barra
    wrapper.style.setProperty("grid-template-columns", "15rem 1fr");
    navButton.style.transform = "rotate(90deg)";

    // Retrasar la aparición del texto
    setTimeout(() => {
      navbar.classList.add("text-visible");
    }, 3500); // Coincide con la duración de la transición CSS
  } else {
    navbar.style.width = "100px"; // Ancho reducido de la barra
    wrapper.style.setProperty("grid-template-columns", "100px 1fr");
    navButton.style.transform = "rotate(0deg)";
    navbar.classList.remove("text-visible");
  }
});

//================== show/hide (profile & notification) menu ==================//
notificationsIcon.addEventListener("click", function (e) {
  e.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
  notificationsMenu.style.display =
    notificationsMenu.style.display === "block" ? "none" : "block";

  // Asegúrate de cerrar el menú del perfil si está abierto
  dropdownProfile.style.display = "none";
});

profileBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Evita conflictos con otros clics
  dropdownProfile.style.display =
    dropdownProfile.style.display === "block" ? "none" : "block";

  // Asegúrate de cerrar el menú de notificaciones si está abierto
  notificationsMenu.style.display = "none";
});

document.addEventListener("click", function () {
  notificationsMenu.style.display = "none";
  dropdownProfile.style.display = "none";
});

/* notification count */
function updateNotificationCount(count) {
  if (count > 0) {
    notificationCount.textContent = count; // Actualiza el número
    notificationCount.style.display = "flex"; // Asegúrate de que sea visible
  } else {
    notificationCount.style.display = "none"; // Oculta el contador si no hay notificaciones
  }
}

function animateNotificationCount() {
  notificationCount.classList.add("updated");
  setTimeout(() => {
    notificationCount.classList.remove("updated");
    notificationCount.classList.add("updated-end");
    setTimeout(() => notificationCount.classList.remove("updated-end"), 300);
  }, 300);
}

// Inicialmente establece el número de notificaciones
updateNotificationCount(3); // Cambia este valor según tus datos

// Ejemplo: Simula una nueva notificación
setTimeout(() => {
  updateNotificationCount(5);
  animateNotificationCount(); // Cambia el contador a 5
}, 5000); // Después de 5 segundos

/* ================== sidebar-buttons-function ================== */
dashboardBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "none";
});

puntoVentaBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "grid";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "none";
});

clientesBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "none";
});

clientesBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "grid";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "none";
});

facturasBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "grid";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "none";
});

inventariosBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "grid";
  configuracionSection.style.display = "none";
});

configBtn.addEventListener("click", function () {
  dashboardSection.style.display = "none";
  puntoVentaSection.style.display = "none";
  clientesSection.style.display = "none";
  facturacionSection.style.display = "none";
  inventariosSection.style.display = "none";
  configuracionSection.style.display = "grid";
});

/* ============== Listado de productos ============== */

const productos = [
  { id: 1, nombre: "Agua", categoria: "bebidas", precio: 1.5, impuesto: 0.2 },
  {
    id: 2,
    nombre: "Refresco",
    categoria: "bebidas",
    precio: 2.0,
    impuesto: 0.3,
  },
  {
    id: 3,
    nombre: "Chocolate",
    categoria: "dulces",
    precio: 1.2,
    impuesto: 0.18,
  },
  {
    id: 4,
    nombre: "Galletas",
    categoria: "dulces",
    precio: 2.5,
    impuesto: 0.25,
  },
  { id: 5, nombre: "Arroz", categoria: "paquetes", precio: 3.0, impuesto: 0.4 },
  { id: 6, nombre: "Leche", categoria: "lacteos", precio: 1.8, impuesto: 0.15 },
];

const productosLista = document.querySelector(".productos-lista");

function renderizarProductos(productosFiltrados) {
  productosLista.innerHTML = ""; // Limpia la lista de productos
  productosFiltrados.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    productoDiv.innerHTML = `
      <span class="nombre">${producto.nombre}</span>
      <span class="categoria">${producto.categoria}</span>
      <span class="precio">$${producto.precio.toFixed(2)}</span>
      <span class="impuesto">Imp: $${producto.impuesto.toFixed(2)}</span>
      <button class="agregar-carrito" data-id="${
        producto.id
      }"><i class="fa-solid fa-cart-shopping"></i></button>
    `;
    productosLista.appendChild(productoDiv);
  });
}

// Renderiza todos los productos al cargar la página
renderizarProductos(productos);

const botonesFiltro = document.querySelectorAll(".filtro");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.categoria;
    if (categoria === "todos") {
      renderizarProductos(productos);
    } else {
      const productosFiltrados = productos.filter(
        (producto) => producto.categoria === categoria
      );
      renderizarProductos(productosFiltrados);
    }
  });
});

// Añadir al carrito
let carrito = [];

const prodList = document.querySelector(".prod-list");

productosLista.addEventListener("click", (e) => {
  if (e.target.classList.contains("agregar-carrito")) {
    const productoId = parseInt(e.target.dataset.id);
    const producto = productos.find((prod) => prod.id === productoId);
    carrito.push(producto);
    console.log("Carrito:", carrito);
    alert(`${producto.nombre} añadido al carrito`);
  }

  renderizarListaCarrito();
  actualizarValoresCarrito();
});

function renderizarListaCarrito() {
  prodList.innerHTML = "";
  carrito.forEach((producto, index) => {
    const prodCart = document.createElement("div");
    prodCart.classList.add("prod-cart");
    prodCart.innerHTML = `
      <span class="produc-title">${producto.nombre}</span>
      <input type="number" class="produc-cant" value="${
        producto.cantidad || 1
      }" data-index="${index}">
      <span class="produc-unit">${producto.precio.toFixed(2)}</span>
      <span class="produc-tot">${(
        producto.precio * (producto.cantidad || 1)
      ).toFixed(2)}</span>
      <button class="btn-clear" data-index="${index}">
        <i class="fa-solid fa-trash-can" id="trash-btn"></i>
      </button> 
    `;
    prodList.appendChild(prodCart);
  });
}

prodList.addEventListener("input", (e) => {
  if (e.target.classList.contains("produc-cant")) {
    const index = e.target.dataset.index;
    const nuevaCantidad = parseInt(e.target.value);
    carrito[index].cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
    renderizarListaCarrito();
  }
  actualizarValoresCarrito()
});

prodList.addEventListener("click", (e) => {
  if (e.target.closest(".btn-clear")) {
    const index = e.target.closest(".btn-clear").dataset.index;
    carrito.splice(index, 1);
    renderizarListaCarrito();
  }
  actualizarValoresCarrito()
});

/*========= SUBTOTAL, TAXES Y MEDIO DE PAGO =========*/
function actualizarValoresCarrito() {
  const subtotal = carrito.reduce(
    (acum, produc) => acum + produc.precio * (produc.cantidad || 1),
    0
  );

  const taxes = carrito.reduce(
    (acum, produc) => acum + produc.impuesto * (produc.cantidad || 1), 0
  );

  const total = subtotal + taxes
  document.querySelector(".subTotal").textContent = `$${subtotal.toFixed(2)}`;
  document.querySelector(".taxes").textContent = `$${taxes.toFixed(2)}`;
  document.querySelector(".total").textContent = `$${total.toFixed(2)}`;
}

const invoiceCash = document.querySelector(".cash");

function guardarFacturaEnLocalStorage(invoice) {
  // Obtén facturas existentes
  const invoices = JSON.parse(localStorage.getItem("Facturas")) || [];
  
  // Añade la nueva factura
  invoices.push(invoice);
  
  // Guarda las facturas actualizadas
  localStorage.setItem("Facturas", JSON.stringify(invoices));
  
  console.log("Factura guardada en localStorage:", invoice);
  getInvoices()
}

function getInvoices(){
  const invoices = JSON.parse(localStorage.getItem("Facturas")) || [];
  console.log("Facturas guardadas:", invoices)
  return invoices
}

function limpiarCarrito(){
  carrito = [];
  document.querySelector(".subTotal").innerHTML= "";
  document.querySelector(".taxes").innerHTML="";
  document.querySelector(".total").innerHTML="";
  prodList.innerHTML= "";
}

function createInvoice(tipoPago){
  if (carrito.length === 0) {
    alert("Aún no hay productos seleccionados para facturar");
    return;
  }
  let invoice = {
    id: Date.now(),
    cliente: "mostrador",
    tipoPago: tipoPago,
    productos: carrito,
    subtotal: document.querySelector(".subTotal").textContent,
    impuestos: document.querySelector(".taxes").textContent,
    total: document.querySelector(".total").textContent,
  }
  console.log(invoice)
  alert(`${invoice} Factura creada y guardada`)
  guardarFacturaEnLocalStorage(invoice)
  limpiarCarrito()
}

document.querySelectorAll(".btn-pago").forEach((boton) =>{
  boton.addEventListener("click", function (){
    const tipoPago = this.getAttribute("data-tipoPago");
    console.log("Tipo de pago seleccionado", tipoPago)
    createInvoice(tipoPago)
  })
})

// invoiceCash.addEventListener("click", (e) =>{
//   let tipoDePago = ""
//   // botonesTipoPago.forEach((boton) =>{
//   //   boton.addEventListener("click", ()=>{
//   //     const tipoPago = boton.dataset.tipoPago;
//   //     if(tipoPago === "cash"){
//   //       tipoDePago = "cash"
//   //     }else{

//   //     }
//   //   })
//   // })
//   const invoice = {
//     id: Date.now(),
//     cliente: "mostrador",
//     tipoPago: "efectivo",
//     productos: carrito,
//     subtotal: document.querySelector(".subTotal").textContent,
//     impuestos: document.querySelector(".taxes").textContent,
//     total: document.querySelector(".total").textContent
//   };
//   console.log(invoice)
//   alert(`${invoice} Factura creada y guardada`);
//   guardarFacturaEnLocalStorage(invoice)
//   prodList.innerHTML = "";
//   console.log(carrito)
// })





