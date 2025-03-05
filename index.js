const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Ayın ilk günü (0=Pazar, 1=Pazartesi...)
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate(); // Ayın son günü

    monthEl.innerText = `${months[currentMonth]} ${currentYear}`;
    fullDateEl.innerText = new Date().toDateString();

    let days = "";

    // week days
    daysOfWeek.forEach((day) => {
        days += `<div class="day-name">${day}</div>`;
    });

    // add free days
    let emptyDays = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = 0; i < emptyDays; i++) {
        days += `<div class="empty"></div>`;
    }

    // add days
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === date.getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    daysEl.innerHTML = days;
}

// last mounth
prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

// next mounth
nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// Sayfa yüklendiğinde takvimi göster
renderCalendar();
