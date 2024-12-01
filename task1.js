const a = prompt("Введите время суток");
if (typeof a === 'string' && a.trim() !== '') {
    if (a.toLowerCase() === 'утро') {
        alert('Предлагаем вам кофе!');
    } else if (a.toLowerCase() === 'день') {
        alert('Предлагаем вам чай!');
    } else if (a.toLowerCase() === 'вечер') {
        alert('Предлагаем вам горячий шоколад!');
    } else {
        alert('Ошибка: введено некорректное время суток!');
    }
} else {
    alert('Ошибка: пожалуйста, введите строку!');
}
