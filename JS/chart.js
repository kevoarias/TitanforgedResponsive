google.charts.load('current', {
    'packages': ['corechart'],
    'language': 'es'
});
google.charts.setOnLoadCallback(dibujaGrafico);

function dibujaGrafico() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Marca de coche');
    data.addColumn('number', 'Ventas (en miles)'); // Cambiado el nombre de la columna a algo más adecuado

    // Modifica los datos para reflejar las marcas de coches y las ventas asociadas a cada una
    data.addRows([
        ['Ferrari', 120],
        ['Lamborghini', 90],
        ['Aston Martin', 80],
        ['Koenigsegg', 60]
    ]);

    var opciones = { 'title': 'Ventas de marcas de coches', 'width': 400, 'height': 300 };
    var chart = new google.visualization.PieChart(document.getElementById('midiv'));
    chart.draw(data, opciones);
}