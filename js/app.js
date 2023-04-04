const form = document.querySelector("#form")
const dayEl = document.querySelector("#day")
const monEl = document.querySelector("#mon")
const yearEl = document.querySelector("#year")

const yearsEl = document.querySelector("#years")
const monthsEl = document.querySelector("#months")
const daysEl = document.querySelector("#days")
const labelD = document.querySelector(".labelD")
const labelM = document.querySelector(".labelM")
const labelY = document.querySelector(".labelY")

const dayS = document.querySelector(".day")
const monS = document.querySelector(".mon")
const yearS = document.querySelector(".year")

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        const monthDays = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
        ageMonths--;
        ageDays += monthDays;
    }

    return {
        year: ageYears,
        day: ageDays,
        month: ageMonths
    };
}

// Example usage:




form.addEventListener("submit", (e) => {
    e.preventDefault()
    const today = new Date().getFullYear();
    const day = dayEl.value
    const mon = monEl.value
    const year = yearEl.value
    const obj = calculateAge(`${year}-${mon}-${day}`);

    if (day > 31 || mon > 12 || year > today) {

        erFunc(day, mon, year, today)

    } else if (day.length && mon.length && year.length) {
        yearsEl.textContent = obj.year
        monthsEl.textContent = obj.month
        daysEl.textContent = obj.day
    }
})

function erFunc(day, mon, year, FullYear) {
    if (day > 31) {
        ui(labelD, dayS, dayEl, "Must be a valid day")
    }
    if (mon > 12) {
        ui(labelM, monS, monEl, "Must be a valid month")
    }
    if (year > FullYear) {
        ui(labelY, yearS, yearEl, "Must be in the past")
    }
}

function ui(label, span, el, text) {
    label.style.color = "#FF5959"
    span.textContent = text
    el.style.border = "1px solid #FF5959"
    setTimeout(() => {
        label.style.color = ""
        span.textContent = ''
        el.style.border = ""
    }, 3000);
}
