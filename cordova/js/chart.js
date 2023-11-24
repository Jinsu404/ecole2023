var data = {
  labels: ["2018년", "2019년", "2020년", "2021년", "2022년 8월"],
  datasets: [
    {
      label: "분양 신청인원",
      data: [138, 144, 121, 112, 128],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "선정 인원",
      data: [30, 29, 28, 25, 22],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "선정인원 대비 신청인원 비율",
      data: [21.7, 20.1, 23.1, 22.3, 17.2],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

// 차트 생성
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    responsive: true,
  },
});
