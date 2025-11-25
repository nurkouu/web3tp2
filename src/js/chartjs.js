import Chart from "chart.js/auto";

let graphique = new Chart(document.querySelector("#radar"), {
  type: "radar",
  data: {
    labels: [
      "Classic Rock",
      "Pop Music",
      "Country/Western",
      "Hip-Hop/Rap",
      "Electronic Dance/EDM",
      "Chiptune"
    ],
    datasets: [
      {
        label: "Courage",
        data: [20, 11, 18, 32, 40, 1],
        backgroundColor: "rgb(154, 207, 169)",
        pointBackgroundColor: "rgb(83, 255, 138)",
        borderWidth: 0
      },
      {
        label: "Joie",
        data: [12, 31, 7, 26, 19, 4],
        backgroundColor: "rgba(85, 239, 85, 0.2)",
        pointBackgroundColor: "rgba(85, 239, 85, 1)",
        borderWidth: 0
      },
      {
        label: "Culpabilité",
        data: [8, 25, 14, 32, 6, 21],
        backgroundColor: "rgba(85, 85, 239, 0.2)",
        pointBackgroundColor: "rgba(85, 85, 239, 1)",
        borderWidth: 0
      },
      {
        label: "Peur",
        data: [10, 5, 43, 28, 17, 8],
        backgroundColor: "rgba(85, 85, 239, 0.2)",
        pointBackgroundColor: "rgba(85, 85, 239, 1)",
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
        text: "Genres écoutés par tranche d’âge"
      }
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(222,222,222,0.1)"
        },
        grid: {
          circular: false,
          color: "rgba(222,222,222,0.1)"
        },
        ticks: { stepSize: 10, showLabelBackdrop: false }
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
  graphique.update();
}, 1000);


let graph = new Chart(document.querySelector("#anneau"), {
  type: "doughnut",
  data: {
    labels: ["Action", "Horreur", "Comédie", "Science-fiction"],
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(239, 85, 85, 1)",
          "rgba(85, 239, 85, 1)",
          "rgba(85, 85, 239, 1)",
          "rgba(222, 222, 222, 1)"
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
    circumference: 360,
    rotation: -90,
    plugins: {
      title: {
        display: true,
        text: "Intérêt par genre de film",
        padding: { top: 8, bottom: 12 }
      }
    }
  }
});


setInterval(() => {
  for (let ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 20); 4
    }
  }
  graphique.update();
}, 1000);
