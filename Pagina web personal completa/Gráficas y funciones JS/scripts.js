// Funciones matemáticas a graficar
function generarDatos(funcion, xInicial, xFinal, paso) {
    const xValores = [];
    const yValores = [];
    for (let x = xInicial; x <= xFinal; x += paso) {
        xValores.push(x);
        yValores.push(funcion(x));
    }
    return { x: xValores, y: yValores };
}

// Definir las funciones
const funciones = {
    lineal: x => x,
    cuadratica: x => x ** 2,
    cubica: x => x ** 3,
    senoidal: x => Math.sin(x),
    exponencial: x => Math.exp(x)
};

// Rango de valores para graficar
const rangoX = { inicio: -10, fin: 10, paso: 0.1 };

// Generar datos para cada función
const datosLineal = generarDatos(funciones.lineal, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosCuadratica = generarDatos(funciones.cuadratica, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosCubica = generarDatos(funciones.cubica, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosSenoidal = generarDatos(funciones.senoidal, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosExponencial = generarDatos(funciones.exponencial, rangoX.inicio, rangoX.fin, rangoX.paso);

// Crear gráfico con Chart.js
const ctx = document.getElementById('grafico').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datosLineal.x,  // Usar los mismos x-values para todas las funciones
        datasets: [
            {
                label: 'f(x) = x',
                data: datosLineal.y,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'f(x) = x²',
                data: datosCuadratica.y,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'f(x) = x³',
                data: datosCubica.y,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'f(x) = sin(x)',
                data: datosSenoidal.y,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'f(x) = e^x',
                data: datosExponencial.y,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y'
                },
                type: 'linear',
                beginAtZero: false
            }
        }
    }
});
