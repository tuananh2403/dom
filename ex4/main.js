
let yearBorn = window.prompt("Năm sinh của bạn :");
let date = new Date();
let born = parseInt(yearBorn);
let age = date.getFullYear() - born;
document.write("Tuổi của bạn là :" + age);