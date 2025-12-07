import Chart from "chart.js/auto";

let graphique = new Chart(document.querySelector("#radar"), {
  type: "radar",
  data: {
    labels: [
      "Courage",
      "Joy",
      "Anger",
      "Fear",
      "Sadness",
      "Love"
    ],
    datasets: [
      {
        label: "Seraph I",
        data: [20, 11, 18, 32, 40, 1],
        backgroundColor: "rgba(125, 121, 32, 0.5)",
        pointBackgroundColor: "rgb(251, 248, 95)",
        borderWidth: 0
      },
      {
        label: "Seraph II",
        data: [12, 31, 7, 26, 19, 4],
        backgroundColor: "rgba(39, 82, 56, 0.8)",
        pointBackgroundColor: "rgb(83, 255, 138)",
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: "Emotional Profile",
        color: "white",
        font: {
          family: "over",
          size: 13

        }
      },
      legend: {
        labels: {
          color: "rgba(243, 243, 232, 0.7)",
          font: {
            family: "timing",
            size: 14

          }
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(243, 243, 232, 0.7)"
        },
        grid: {
          circular: false,
          color: "rgba(243, 243, 232, 0.7)"
        },
        ticks: {
          stepSize: 10,
          showLabelBackdrop: false,
          color: "white"
        },
        pointLabels: {
          color: "rgba(243, 243, 232, 0.7)",
          font: {
            family: "timing",
            size: 13

          }
        }
      }
    }
  }
});


setInterval(() => {
  for (let ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 40 + 10);
    }
  }
  graphique.update({
    duration: 800,
    easing: "easeInOutSine"
  });
}, 700);


let graph = new Chart(document.querySelector("#anneau"), {
  type: "doughnut",
  data: {
    labels: ["Divine Manipulation", "Halo Barrier", "Celestial Blessing", "Healing touch"],
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(251, 248, 95, 0.6)",
          "rgba(125, 121, 32, 0.5)",
          "rgba(39, 82, 56, 0.8)",
          "rgba(83, 255, 138 , 0.6)",
        ],
        hoverOffset: 20,
        borderWidth: 0,
        borderRadius: 1,
        spacing: 1,

      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    circumference: 180,
    rotation: -90,
    plugins: {

      legend: {
        position: "right",
        align: "center",
        labels: {
          color: "rgba(243, 243, 232, 0.7)",
          font: {
            family: "timing",
            size: 13

          }
        }
      }
    }
  }
});

setInterval(() => {
  for (let ds of graph.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 20);
    }
  }
  graph.update();
}, 800);


const ctx = document.getElementById('multiAxisChart').getContext('2d');

const multiAxisChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
    datasets: [
      {
        label: 'Seraphim I - Heart Rate (bpm)',
        data: [80, 92, 105, 98, 120, 110, 95],
        borderColor: "rgba(251, 248, 95, 1)",
        backgroundColor: "rgba(251, 248, 95, 0.25)",
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        fill: true
      },
      {
        label: 'Seraphim II - Heart Rate (bpm)',
        data: [70, 85, 95, 110, 108, 100, 90],
        borderColor: "rgba(83, 255, 138, 1)",
        backgroundColor: "rgba(83, 255, 138, 0.25)",
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        fill: true
      }
    ]
  },

  options: {
    responsive: true,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    },

    animations: {
      x: {
        type: 'number',
        easing: 'easeInOutQuad',
        from: NaN,
        duration: 1500
      },
      y: {
        type: 'number',
        easing: 'easeInOutQuad',
        duration: 1500
      }
    },

    plugins: {
      legend: {
        labels: {
          color: "rgba(243, 243, 232, 0.7)",
          font: {
            family: "timing",
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Divine Pulse rate',
        color: "rgba(243, 243, 232, 1)",
        font: {
          family: "over",
          size: 13
        }
      }
    },

    scales: {
      y: {
        title: {
          display: true,
          text: 'Heart Rate (bpm)',
          color: 'white',
          font: {
            family: "timing",
            size: 15
          }
        },
        min: 50,
        max: 150,
        ticks: {
          color: 'white',
          font: {
            family: "timing",
            size: 14
          }
        }
      },

      x: {
        title: {
          display: true,
          text: 'Time',
          color: 'white',
          font: {
            family: "timing",
            size: 15
          }
        },
        ticks: {
          color: 'white',
          font: {
            family: "timing",
            size: 14
          }
        }
      }
    }
  }
});
