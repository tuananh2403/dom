let age = -1;
while(age < 0){
    let yearBorn = prompt("Năm sinh của bạn :");
    let date = new Date();
    let born = parseInt(yearBorn);
    age = date.getFullYear() - born;
}
document.write("Tuổi của bạn là :" + age);