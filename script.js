document.getElementById("reservationForm")
.addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("name").value
const date=document.getElementById("date").value

let message=
"Hello, I want to reserve a table.%0A"+
"Name: "+name+"%0A"+
"Date: "+date

window.open("https://wa.me/971564663842?text="+message)

})