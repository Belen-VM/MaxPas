let todasTarjetas = [];
for (let i = 0; i < cajas.length; i++) {
  const caja = cajas[i];
  console.log(caja);
  todasTarjetas = [...todasTarjetas, ...caja.tarjetas];
  console.log({ todasTarjetas });
}
function fillDataTarjeta(elementID, data) {
  console.log({ elementID, data });
  const targetSelect = document.getElementById(elementID);
  console.log({ targetSelect });
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const element = document.createElement("option");
    element.textContent = "Tarjeta " + item.numero;
    console.log({ item });
    element.value = item.numero;
    targetSelect.appendChild(element);
  }
}

function fillDataCaja(elementClass, data) {
  console.log({ elementClass, data });
  const targetItems = document.querySelectorAll(elementClass);
  console.log({ targetItems });
  for (let index = 0; index < targetItems.length; index++) {
    const targetSelect = targetItems[index];

    console.log({ targetSelect });
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const element = document.createElement("option");
      element.textContent = "Caja " + item.numero;
      console.log({ item });
      element.value = item.numero;
      targetSelect.appendChild(element);
    }
  }
}

fillDataTarjeta("cargar-tarjeta", todasTarjetas);
fillDataTarjeta("hd-tarjeta", todasTarjetas);
fillDataCaja(".cajas", cajas);

function AnimateFeedbackBox(idBox, message) {
  console.log({ idBox });
  const feedbackBox = document.getElementById(idBox);
  ClearFeedbackBoxes();
  feedbackBox.classList.remove("resultados-on");

  feedbackBox.textContent = message;

  setTimeout(() => {
    feedbackBox.classList.add("resultados-on");
  }, 0);
}

function ClearFeedbackBoxes() {
  const todosFeedBackBox = document.querySelectorAll(".resultados-off");
  for (let index = 0; index < todosFeedBackBox.length; index++) {
    const currentFeedBackBox = todosFeedBackBox[index];
    currentFeedBackBox.classList.remove("resultados-on");
  }
}
