// document.getElementById("home").onclick = function() {
//     window.location.href = "minigame.html"}
const currentDate = document.querySelector(".currentDate"),
daysId = document.querySelector(".days"),
iconBeforeNext = document.querySelectorAll(".icons span");
    
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
    
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
    
iconBeforeNext.forEach(icon =>
{
    icon.addEventListener("click", () => {
        currMonth = icon.id === "next" ? currMonth + 1 : currMonth - 1;
        if (currMonth < 0 || currMonth > 11)
        {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        else
        {
            date = new Date();
        }
    
        renderCalendar();
    });
});
    
const renderCalendar = () =>
{
    let firstDayOfMon = new Date(currYear, currMonth, 1).getDay(),
    lstDateOfMon = new Date(currYear, currMonth + 1, 0).getDate(),
    lstDayOfMon = new Date(currYear, currMonth, lstDateOfMon).getDay(),
    lstDateoflstMon = new Date(currYear, currMonth, 0).getDate();
    let listTag = "";
    
    for (let i = firstDayOfMon; i > 0; i--)
    {
        listTag += `<li class="inactive">${lstDateoflstMon - i + 1}</li>`;
    }
    
    for (let i = 1; i <= lstDateOfMon; i++)
    {
        let today = i === new Date().getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear() ? "active" : "";
        listTag += `<li class="${today}">${i}</li>`;
    }
    
    for(let i = lstDayOfMon; i < 6; i++)
    {
        listTag += `<li class="inactive">${i - lstDayOfMon + 1}</li>`;
    }
    
    console.log(listTag);
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysId.innerHTML = listTag;
}
    
renderCalendar();