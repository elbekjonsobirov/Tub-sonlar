let son = prompt('Sonni kiriting :');

son = parseInt(son);

for (let i = 1; i <= son; i++) {

    TubSon = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            TubSon = false;
            break;
        }
    }
    if (TubSon == true) {
        console.log(i)
    }
}