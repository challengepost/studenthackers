// GA LINK CLICKY STUFF
var teamsButton = function(button) {
   ga('send', 'event', 'teamsButton', 'click', button, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = "http://devpost.com/teams";}
   });
}

//onclick="teamsButton('leftRail')"
//onclick="teamsButton('endReport')"


// CHART.JS STUFF

var ch1 = document.getElementById("salary_chart");
var ch2= document.getElementById("people_chart");
var ch3 = document.getElementById("equity_chart");

Chart.defaults.global.responsive = true;
Chart.defaults.global.hover.mode = "";
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.tooltips.enabled = false;

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
    text: "Starting salary at next full-time job",
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
        display: true,
        labelString: "Percentage"
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

/* MEET PEOPLE CHART */
var peopleData = {
    labels: ["0-1", "1-3", "3-5", "5+"],
    datasets: [
        {
          // bar colors
          backgroundColor: "rgba(45,158,179,0.6)",
          borderColor: "rgba(45,158,179,1)",
          borderWidth: 0,
          hoverBackgroundColor: "rgba(45,158,179,1)",
          hoverBorderColor: "rgba(45,158,179,1)",

          // The actual data
          data: [35, 94, 70, 7],

          // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
          yAxisID: "y-axis-0",
        }
    ]
};
var peopleOptions = {
  title: {
    text: "",
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
        display: true,
        labelString: "Percentage"
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

var peopleChart = new Chart(ch2, {
    type: 'bar',
    data: peopleData,
    options: peopleOptions
});

/* EQUITY CHART */
var equityData = {
    labels: [
        "Very",
        "Kinda",
        "Not important"
    ],
    datasets: [
        {
            data: [32.5, 58.3, 9.2],
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
