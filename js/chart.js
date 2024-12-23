
Chart.defaults.font.size = 14;
Chart.defaults.fontFamily = 'montserrat';
Chart.defaults.fontFamily = 600;

const chartData = {
    labels: [ 'Presale', 'Liquidity', 'CEX', 'Ecosystem' ],
    datasets: [{
        data: [40, 23.52, 20.68, 15 ],
        backgroundColor: ['#ffffff21', '#6e6e6e34', '#0c0c0c',  '#ffffff0f'],
        lineTension: 0.1,
        showActualPercentages: true,
        borderColor: "transparent",
        pointBackgroundColor: "#adadad",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        barPercentage: 0.25,
        categoryPercentage: 0.5,
        hoverOffset: 34,
        datalabels: {
            color: "white",
        }
    }]
};

const config = {
    type: 'doughnut',
    data: chartData,
    options: {
        plugins: {
            legend: {
                display: false
            },

            tooltips: {
                enabled: true,
            },

            datalabels: {
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalSum(total, datapoint) {
                        return total + datapoint;
                    }
                    const totalValue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalValue * 100).toFixed(1);
                    return `${percentageValue}%`;
                }
            },
        },
        responsive: true,
        animations: {
            tension: {
                duration: 900000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
    },
    plugins: [ChartDataLabels],

};


function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener('touchmove', function () {
    if (checkVisible(document.querySelector('#chart--container'))) {
        new Chart(document.getElementById('myChart'), config);
    }
});

new Chart(document.getElementById('myChart'), config);