function convertToDog(text) {
    var new_word = '';
    return text.split(' ').map(function(x) {
        if (isNaN(x)) {
            if (x[0] == x[0].toUpperCase()) {
                new_word = 'G';
            } else {
                new_word = 'g';
            }
            if (x.length < 4) {
                switch (x.length) {
                    case 1:
                        new_word += 'r';
                        break;
                    case 2:
                        new_word += 'rr';
                        break;
                    case 3:
                        new_word += 'rrr';
                        break;
                }
                return new_word;
            } else {
                if (x[0] == x[0].toUpperCase()) {
                    new_word = 'W';
                } else {
                    new_word = 'w';
                }

                for (var y = 0; y < x.length - 2; y++) {
                    if (x[y].toLowerCase() != x[y].toUpperCase()) {
                        new_word += 'o';
                    } else {
                        new_word += x[y];
                    }
                }
                new_word += 'f';

                return new_word;
            }
        } else {
            return x;
        }
    }).join(' ');
}

chrome.storage.sync.get("active", function(result) {
    if (result.active) {
        $('p, label, span, cite').each(function(index) {
            $(this).text(convertToDog($(this).text()));
        });
        document.title = convertToDog(document.title);
    }
});
