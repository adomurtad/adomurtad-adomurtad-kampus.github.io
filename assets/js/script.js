// JavaScript public
// calender
const calendarDates = document.getElementById("calendar-dates");
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar() {
    calendarDates.innerHTML = "";

const year = currentDate.getFullYear();
const month = currentDate.getMonth();

monthYear.textContent = `${currentDate.toLocaleString("default", { month: "long" })} ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
    calendarDates.innerHTML += "<div></div>";
}

for (let i = 1; i <= lastDate; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.textContent = i;
    if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        dateDiv.classList.add("today");
    }
    calendarDates.appendChild(dateDiv);
}
}

prevMonthBtn.addEventListener("click", () => {
currentDate.setMonth(currentDate.getMonth() - 1);
renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
currentDate.setMonth(currentDate.getMonth() + 1);
renderCalendar();
});

renderCalendar();


// dasboard
// Grafik Pendaftaran
var ctx1 = document.getElementById('enrollmentChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Pendaftaran',
      data: [120, 190, 300, 500, 200],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true
    }]
  }
});

// Grafik Pengunjung
var ctx2 = document.getElementById('visitorChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Pengunjung',
      data: [300, 450, 700, 500, 400],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  }
});

