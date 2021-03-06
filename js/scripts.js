$(document).ready(function () {
    // Background Bar Chart canvas
    var bgBarCtx = document.getElementById("background-bar-chart");
    createbgBarChart(bgBarCtx);

    // % usage every month in different categories line chart
    var perCatUse = document.getElementById("perCatLineChart");
    createPerCatUseChart(perCatUse);

    // Total usage every month in different categories line chart
    var totCatUse = document.getElementById("totCatLineChart");
    createTotCatUseChart(totCatUse);

    // Transaction distribution by merchants for apparels pie chart
    var appCatDis = document.getElementById("appCatPieChart");
    createAppCatUseChart(appCatDis);

    // Transaction distribution by merchants for groceries pie chart
    var groCatDis = document.getElementById("groCatPieChart");
    createGroCatUseChart(groCatDis);

    // Transaction distribution in a particular day time across apparels
    var appCatBar = document.getElementById("appCatBarChart");
    createAppCatBarChart(appCatBar);

    // Transaction distribution in a particular day time across gorceries
    var appCatBar = document.getElementById("groCatBarChart");
    createGroCatBarChart(appCatBar);
});

// Create Line chart for Total Views
function createbgBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
            datasets: [{
                label: '# of Votes',
                data: [26, 34, 22, 43, 6, 25, 40, 45, 9, 33, 35, 29, 17, 9, 45, 2, 28, 16, 12, 39, 3, 31, 11, 42, 49, 20, 22, 5, 45, 26, 7, 14, 28, 12, 19, 44, 40, 46, 24, 37, 36, 3, 8, 25, 18, 11, 32, 48, 27, 38, 38, 7, 39, 47, 48, 34, 13, 26, 50, 18, 28, 24, 23, 29, 49, 42, 1, 30, 12, 35, 41, 40, 36, 19, 22, 43, 6, 25, 40, 45, 9, 27, 44, 17, 18, 36, 4, 5, 16, 34, 48, 13, 7, 50, 42, 24, 26, 32, 30, 21],
                backgroundColor: 'rgba(219, 221, 225, 1)',
                borderColor: 'rgba(219, 221, 225, 1)',
                hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 1
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            animation: {
                duration: 700,
                easing: 'easeInQuint'
            },
            title: {
                text: 'Data',
                display: false,
                fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    display: false
                }],
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 0.75,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });

    setInterval(function() {
        // console.log(chart.data.datasets[0].data);
        for (var i = 0; i < 7; i++) {
            var index = Math.floor(Math.random() * 100);
            var dataVal = Math.floor(Math.random() * 50);
            chart.data.datasets[0].data[index] = dataVal;
        }
        chart.update();
    }, 3000);
}

// Create Line chart for % usage per month category wise
function createPerCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Healthcare",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(232, 141, 103)',
                pointBackgroundColor: 'rgb(232, 141, 103)',
                // data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
                data: [15, 14, 20, 25, 33, 29, 26, 35, 33, 30, 28, 25],
            },
            // {
            //     label: "Transport",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(173, 215, 246)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     // data: [17, 16, 35, 34, 31, 10, 28, 10, 10, 25, 17, 21],
            //     data: [10, 12, 18, 24, 31, 28, 24, 26, 30, 33, 29, 26],
            // },
            // {
            //     label: "Education",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(141, 106, 159)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            // {
            //     label: "Entertainment",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(8, 146, 165)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            {
                label: "Apparels",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(7, 190, 184)',
                pointBackgroundColor: 'rgb(7, 190, 184)',
                data: [4, 8, 5, 10, 14, 10, 16, 20, 15, 11, 9, 12],
            },
            {
                label: "Groceries",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(194, 249, 112)',
                pointBackgroundColor: 'rgb(194, 249, 112)',
                data: [1, 6, 12, 19, 24, 22, 19, 25, 29, 22, 17, 20],
            },
            {
                label: "Electronics",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(238, 96, 85)',
                pointBackgroundColor: 'rgb(238, 96, 85)',
                // data: [5, 10, 27, 25, 28, 4, 20, 3, 10, 20, 10, 15],
                data: [3, 8, 10, 15, 22, 19, 25, 27, 31, 25, 20, 22],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            // maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Percent Usage',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 9
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label +': ' + tooltipItem.yLabel + '%';
                    }
                },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10,
                        // Include a % sign in the ticks
                        callback: function(value, index, values) {
                            return value + '%';
                        },
                        display: false
                    },
                }],
                xAxes: [{
                    gridLines: {
                        // color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Create Line chart for total usage per month category wise
function createTotCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Healthcare",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(173, 215, 246)',
                pointBackgroundColor: 'rgb(173, 215, 246)',
                // data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
                data: [15, 14, 20, 25, 33, 29, 26, 35, 33, 30, 28, 25],
            },
            // {
            //     label: "Transport",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(173, 215, 246)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     // data: [17, 16, 35, 34, 31, 10, 28, 10, 10, 25, 17, 21],
            //     data: [10, 12, 18, 24, 31, 28, 24, 26, 30, 33, 29, 26],
            // },
            // {
            //     label: "Education",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(141, 106, 159)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            // {
            //     label: "Entertainment",
            //     backgroundColor: 'rgba(255, 255, 255, 0)',
            //     borderColor: 'rgb(8, 146, 165)',
            //     // pointBackgroundColor: 'rgb(255, 255, 255)',
            //     data: [15, 14, 35, 29, 31, 8, 26, 6, 1, 23, 13, 18],
            // },
            {
                label: "Apparels",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(232, 141, 103)',
                pointBackgroundColor: 'rgb(232, 141, 103)',
                data: [4, 8, 5, 10, 14, 10, 16, 20, 15, 11, 9, 12],
            },
            {
                label: "Groceries",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(118, 194, 175)',
                pointBackgroundColor: 'rgb(118, 194, 175)',
                data: [1, 6, 12, 19, 24, 22, 19, 25, 29, 22, 17, 20],
            },
            {
                label: "Electronics",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(141, 106, 159)',
                pointBackgroundColor: 'rgb(141, 106, 159)',
                // data: [5, 10, 27, 25, 28, 4, 20, 3, 10, 20, 10, 15],
                data: [3, 8, 10, 15, 22, 19, 25, 27, 31, 25, 20, 22],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            // maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Total Usage',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 9
                }
            },
            tooltips: {
                // callbacks: {
                //     label: function (tooltipItem, data) {
                //         return data.datasets[tooltipItem.datasetIndex].label +': ' + tooltipItem.yLabel + '%';
                //     }
                // },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10,
                        // // Include a % sign in the ticks
                        // callback: function(value, index, values) {
                        //     return value + '%';
                        // },
                        // display: false
                    },
                }],
                xAxes: [{
                    gridLines: {
                        // color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Create Pie chart for merhcant distribution for Apparels
function createAppCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["Flipkart", "Amazon", "Snapdeal", "Ebay", "Myntra", "Jabong", "Shopclues", "Rest"],
            datasets: [{
                label: "Transactions",
                backgroundColor: ['rgb(118, 194, 175)', 'rgb(141, 106, 159)', 'rgb(8, 146, 165)', 'rgb(194, 249, 112)', 'rgb(7, 190, 184)', 'rgb(238, 96, 85)', 'rgb(173, 215, 246)', 'rgb(232, 141, 103)'],
                borderColor: '#fff',
                borderWidth: 1,
                lineTension: 0,
                data: [22, 20, 14, 12, 9, 8, 6, 9],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Merchant Selection for Apparels',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal',
            },
            legend: {
                // display: false
                position: 'top',
                labels: {
                    // boxWidth: 20
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] +': ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false,
                        suggestedMax: 75
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });
}

// Create Pie chart for merhcant distribution for Groceries
function createGroCatUseChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["BigBasket", "Grofers", "Amazon", "Spencers", "RelianceSmart", "Rest"],
            datasets: [{
                label: "Transactions",
                backgroundColor: ['rgb(173, 215, 246)', 'rgb(238, 96, 85)', 'rgb(141, 106, 159)', 'rgb(194, 249, 112)', 'rgb(7, 190, 184)', 'rgb(232, 141, 103)'],
                borderColor: '#fff',
                borderWidth: 1,
                lineTension: 0,
                data: [32, 30, 20, 9, 6, 3],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Merchant Selection for Groceries',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal',
            },
            legend: {
                // display: false
                position: 'top',
                labels: {
                    // boxWidth: 20
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] +': ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false,
                        suggestedMax: 75
                    },
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                }]
            }
        }
    });
}

// Transaction distribution in a particular day time across apparels
function createAppCatBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
                label: '8pm - 2am',
                data: [450, 400, 450, 900, 1700, 1450, 1250],
                backgroundColor: 'rgb(8, 146, 165)',
                borderColor: 'rgba(8, 146, 165, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '2am - 8am',
                data: [100, 70, 70, 430, 600, 550, 200],
                backgroundColor: 'rgb(232, 141, 103)',
                borderColor: 'rgba(232, 141, 103, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '8am - 2pm',
                data: [100, 80, 120, 200, 400, 600, 550],
                backgroundColor: 'rgb(7, 190, 184)',
                borderColor: 'rgba(7, 190, 184, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '2pm - 8pm',
                data: [550, 700, 650, 700, 1400, 1550, 1200],
                backgroundColor: 'rgb(141, 106, 159)',
                borderColor: 'rgba(141, 106, 159, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            // maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Transactions for Apparels',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                // display: false
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 11
                }
            },
            tooltips: {
                // callbacks: {
                //     beforeTitle: function (tooltipItem, data) {
                //         return 'Apparels';
                //     }
                // },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    // display: false
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}

// Transaction distribution in a particular day time across groceries
function createGroCatBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
                label: '8pm - 2am',
                data: [105, 100, 100, 95, 90, 45, 30],
                backgroundColor: 'rgb(8, 146, 165)',
                borderColor: 'rgba(8, 146, 165, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '2am - 8am',
                data: [8, 6, 9, 8, 18, 20, 10],
                backgroundColor: 'rgb(232, 141, 103)',
                borderColor: 'rgba(232, 141, 103, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '8am - 2pm',
                data: [70, 65, 70, 60, 55, 25, 28],
                backgroundColor: 'rgb(7, 190, 184)',
                borderColor: 'rgba(7, 190, 184, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            },
            {
                label: '2pm - 8pm',
                data: [120, 110, 115, 90, 70, 75, 60],
                backgroundColor: 'rgb(141, 106, 159)',
                borderColor: 'rgba(141, 106, 159, 0)',
                // hoverBackgroundColor: 'rgba(210, 210, 210, 1)',
                // hoverBorderColor: 'rgba(210, 210, 210, 1)',
                borderWidth: 0
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            // maintainAspectRatio: false,
            // responsiveAnimationDuration: 400,  // in ms
            title: {
                text: 'Transactions for Groceries',
                display: true,
                // fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                // display: false
                labels: {
                    boxWidth: 10,
                    // usePointStyle: true,
                    fontSize: 11
                }
            },
            tooltips: {
                // callbacks: {
                //     beforeTitle: function (tooltipItem, data) {
                //         return 'Apparels';
                //     }
                // },
                // enabled: false
            },
            scales: {
                yAxes: [{
                    // display: false,
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // fontColor: 'rgba(255, 255, 255, 0.7)',
                        padding: 10
                    },
                    // display: false
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        lineWidth: 2,
                        drawBorder: false
                    },
                    ticks: {
                        // display: false
                    },
                    // display: false
                }]
            }
        }
    });
}
