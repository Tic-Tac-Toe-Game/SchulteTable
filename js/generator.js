define(['underscore'], function (_) {
    return function (size) {
        var values = _.shuffle(_.range(size * size)),
            index = 0;

        return function () {
            return values[index++] + 1;
        };
    };
});