let student = {
    name: prompt("Введите имя:"),
    age: parseInt(prompt("Введите возраст:")),
    subject: prompt("Введите предмет:"),
    grade: prompt("Введите оценку:")
};
student.age += 5;
console.log("Имя: " + student.name);
console.log("Возраст: " + student.age);
console.log("Предмет: " + student.subject);
console.log("Оценка: " + student.grade);