/*
 * Repeat given markup with given times
 * provides @index for the repeated iteraction
 */

module.exports = function (times, opts) {
    var out = "";
    var i;
    var data = {};

    if ( times ) {
        for ( i = 0; i < times; i += 1 ) {
            data.index = i;
            out += opts.fn(this, {
                data: data
            });
        }
    } else {

        out = opts.inverse(this);
    }

    return out;
};