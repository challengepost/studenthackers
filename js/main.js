// initialize bigfoot for footnotes
$.bigfoot();

// CHART.JS STUFF

var ch1 = document.getElementById("salary_chart");
var ch2= document.getElementById("raise_chart");
var ch3 = document.getElementById("equity_chart");

Chart.defaults.global.responsive = true;
Chart.defaults.global.hover.mode = "";
Chart.defaults.global.maintainAspectRatio = true;

Chart.defaults.global.title.display=false;
Chart.defaults.global.title.position="top";
Chart.defaults.global.title.fontColor = "#003e54";
Chart.defaults.global.title.fontFamily = "'Helvetica Neue', sans-serif";
Chart.defaults.global.title.fontSize = 18;
Chart.defaults.global.title.fontStyle = "bold";
Chart.defaults.global.title.padding = 10;

//Chart.defaults.global.tooltips.enabled=false;

/* SALARY CHART */
var salaryData = {
    labels: ["< US $30K", "$30–50K", "$50–70K", "$70–100K", "$100–150K", "> $150K"],
    datasets: [
        {
          // bar colors
          backgroundColor: "rgba(45,158,179,0.6)",
          borderColor: "rgba(45,158,179,1)",
          borderWidth: 0,
          hoverBackgroundColor: "rgba(45,158,179,1)",
          hoverBorderColor: "rgba(45,158,179,1)",

          // The actual data
          data: [8.19, 10.34, 25.86, 31.9, 15.95, 7.76],

          // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
          yAxisID: "y-axis-0",
        }
    ]
};
var salaryOptions = {
  title: {
    text: "Starting salary at next/first full-time job",
  },
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      scaleLabel: {

      },
      ticks: {
        beginAtZero:true
      }
    }],
    xAxes: [{
      scaleLabel: {
        display:false
      },
      ticks: {
        beginAtZero:true
      }
    }]
  }
}

var salaryChart = new Chart(ch1, {
    type: 'bar',
    data: salaryData,
    options: salaryOptions
});


/* RAISE CHART */
/*var raiseData = {
    labels: ["< US $30K", "$30–50K", "$50–70K", "$70–100K", "$100–150K", "> $150K"],
    datasets: [
        {
          label: "$30–50K",
          // bar styling
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          // The actual data
          data: [26,9,0,0,0,0],
          yAxisID: "y-axis-0",
        },
        {
          label: "$50–70K",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [32,17,9,0,0,0]
        },
        {
          label: "$70–100K",
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [26,52,47,13,0,0]
        },
        {
          label: "$100–150K",
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [11,13,33,66,14,0]
        },
        {
          label: "$150–200K",
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [0,0,7,11,46,0]
        },
        {
          label: "> $200K",
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [5,9,4,10,41,100]
        }
    ]
};
var raiseOptions = {
  title: {
    text: "Starting salary vs. expected in 5 years"
  },
  tooltips: {
    enabled: false
  },
  legend: {
    display: true,
    position: 'bottom'
  },
  scales: {
    yAxes: [{
      scaleLabel: {

      },
      ticks: {
        beginAtZero:true
      }
    }],
    xAxes: [{
      scaleLabel: {
        display:false
      },
      ticks: {
        beginAtZero:true
      }
    }]
  }
}

var raiseChart = new Chart(ch2, {
    type: 'bar',
    data: raiseData,
    options: raiseOptions
});
*/

/* EQUITY CHART */
var equityData = {
    labels: [
        "Very",
        "Kinda",
        "Not important"
    ],
    datasets: [
        {
            data: [74, 133, 21],
            backgroundColor: [
                "#77ad39",
                "#ffc247",
                "#2d93b2"
            ],
            hoverBackgroundColor: [
                "#77ad39",
                "#ffc247",
                "#2d93b2"
            ]
        }]
};
var equityOptions = {
  title: {
    text: "How important is company equity?"
  },
  position: "right"
};

var equityChart = new Chart(ch3,{
    type: 'pie',
    data: equityData,
    options: equityOptions
});
