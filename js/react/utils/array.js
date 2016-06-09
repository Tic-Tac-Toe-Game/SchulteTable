function shuffleSort() {
    return .5 - Math.random();
}

function range(from, to) {
    let result = [];

    while (from <= to) {
        result.push(from);
        ++from;
    }

    return result;
}

function shuffle(source) {
    return source.sort(shuffleSort);
}

export { shuffle, range };