
const formulario = document.getElementById("formularioAutomotor");
const tabla = document.getElementById("TablaModelos").querySelector("tbody");
const botonAgregar= document.getElementById("Boton_Agregar");
const mensajeError = document.getElementById("mensajeError");

botonAgregar.addEventListener("click", BotonConfirmar);

function BotonConfirmar() {

   const valor_marca = document.getElementById("input_Marca").value;
   const valor_modelo = document.getElementById("input_Modelo").value;
   const valor_year = document.getElementById("input_Year").value;
   const valor_color = document.getElementById("input_Color").value;

    // if (!Marca || !Modelo || isNaN(Year) || Year <= 1886 || !Color) {
    //    mensajeError.textContent = "Ingresa los datos correspondientes, el Año debe ser posterior a 1885" + Marca + Modelo + Year + Color;
    //   return;
    // }

   mensajeError.textContent = "";

  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${valor_marca}</td>
    <td>${valor_modelo}</td>
    <td>${valor_year}</td>
    <td class="Fondo_${valor_color}"> ${valor_color}</td>
  `;
  tabla.appendChild(fila);

  formulario.reset();
};
