console.log(cajas);
let todasTarjetas = [];
for (let i = 0; i < cajas.length; i++) {
  const caja = cajas[i];
  console.log(caja);
  todasTarjetas = [...todasTarjetas, ...caja.tarjetas];
  console.log({ todasTarjetas });
}
function Form() {}

function cargarMonto() {
  const numeroTarjeta = document.getElementById("tarjeta").value;
  const montoTarjeta = document.getElementById("cargar-monto").value;
  const cargarMontoTarjetasResultado = document.getElementById(
    "cargarMontoTarjetasResultado"
  );
  cargarMontoTarjetasResultado.classList.remove("resultados-on");
  console.log({ numeroTarjeta, montoTarjeta });
  let tarjetaSelecionada = todasTarjetas.filter((tarjeta) => {
    console.log({ tarjeta });

    return numeroTarjeta == tarjeta.numero;
  });

  console.log({ tarjetaSelecionada });
  tarjetaSelecionada[0].saldoAnterior = tarjetaSelecionada[0].montoCarga;
  tarjetaSelecionada[0].montoCarga =
    +montoTarjeta + tarjetaSelecionada[0].saldoAnterior;
  console.log({ tarjetaSelecionada });
  cargarMontoTarjetasResultado.textContent =
    "💲El nuevo saldo es: " + tarjetaSelecionada[0].montoCarga + "🫰";

  setTimeout(() => {
    cargarMontoTarjetasResultado.classList.add("resultados-on");
  }, 0);
}
