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
           font: {             // <-- added font size here
          size: 15,         // increase this number to make title bigger
          weight: 'bold'    // optional
        }
      },
      legend: {
        labels: {
          color: "rgba(243, 243, 232, 0.7)"
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
          color: "rgba(243, 243, 232, 0.7)"
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

      title: {
        display: true,
    
        padding: { top: 8, bottom: 12 },
        color: "white",
        font: {     
          size: 15,        
          weight: 'bold'   
        }
      },
      
      legend: {
         position: "right",  
        align: "start", 
        labels: {
          color: "rgba(243, 243, 232, 0.7)"
        }
      }
    }
  }
});


