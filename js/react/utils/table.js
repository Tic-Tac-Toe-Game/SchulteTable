import { range, shuffle } from 'st/utils/array';

function generate(size) {
    return shuffle(range(1, size * size));
}

export { generate };