const menulinks = document.querySelectorAll(".menulink");
console.log({ menulinks });

for (let i = 0; i < menulinks.length; i++) {
  const link = menulinks[i];
  link.addEventListener("click", (event) => {
    console.log({ event });
    escondeOperaciones();
    desactivarLinksMenu();
    event.target.classList.add("linkActivo");
    const operacionObjetivo = event.target.dataset.target;
    const divOperacion = document.getElementById(operacionObjetivo);
    divOperacion.style.display = "block";
    console.log({ operacionObjetivo });
    console.log({ divOperacion });
  });
}

function escondeOperaciones() {
  const operaciones = document.querySelectorAll(".operaciones");
  for (let i = 0; i < operaciones.length; i++) {
    const operacion = operaciones[i];
    operacion.style.display = "none";
  }
}

function desactivarLinksMenu() {
  const links = document.querySelectorAll(".sidebar a");
  console.log({ links });
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.classList.remove("linkActivo");
  }
}
