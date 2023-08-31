const express = require('express');
const app = express();
const PORT = 3000;

const fs = require('fs'); // this engine requires the fs module like we did Saturday

app.engine('fruits', (filePath, options, callback) => {
    // define the view engine called portal
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        // this is an extremely simple view engine we'll be more complex later
        const rendered = content
            .toString()
            .replace('#name#', '<h1>' + options.name + '</h1>')
            .replace('#description#', '<h1>' + options.description + '</h1>')
            .replace('#color#', '<div>' + options.color + '</div>');
        return callback(null, rendered);
    });
});

app.set('views', './views');
app.set('view engine', 'fruits');

app.get('/apple', (req, res) => {
    res.render('apple', {
        name: 'Fuji Apple',
        description: 'The Fuji apple is an apple cultivar developed by growers at Tohoku Research Station in Fujisaki, Aomori, Japan, in the late 1930s, and brought to market in 1962. It originated as a cross between two American apple varieties—the Red Delicious and old Virginia Ralls Janet apples. ',
        color: 'Red',
    });
});

app.get('/banana', (req, res) => {
    res.render('banana', {
        name: 'Cavendish',
        description: 'Cavendish bananas are the fruits of one of a number of banana cultivars belonging to the Cavendish subgroup of the AAA banana cultivar group. The same term is also used to describe the plants on which the bananas grow. They include commercially important cultivars like Dwarf Cavendish and Grand Nain',
        color: 'Yellow',
    });
});

app.get('/cherry', (req, res) => {
    res.render('cherry', {
        name: 'Bing Cherry',
        description: 'Bing is a cultivar of the wild or sweet cherry that originated in the Pacific Northwest, in Milwaukie, Oregon, United States. The Bing remains a major cultivar in Oregon, Washington, California, Wisconsin and British Columbia. It is the most produced variety of sweet cherry in the United States. ',
        color: 'Dark red',
    });
});

app.get('/grape', (req, res) => {
    res.render('grape', {
        name: 'Concord',
        description: 'The Concord grape is a cultivar derived from the grape species Vitis labrusca that are used as table grapes, wine grapes and juice grapes. They are often used to make grape jelly, grape juice, grape pies, grape-flavored soft drinks, and candy.',
        color: 'Purple',
    });
});

app.get('/kiwi', (req, res) => {
    res.render('kiwi', {
        name: 'Actinidia deliciosa',
        description: 'Actinidia deliciosa, the fuzzy kiwifruit, is a fruiting vine native to Southern China. Other species of Actinidia are also found in China and range east to Japan and north into southern areas of Russian Far East. This species grows naturally at altitudes between 600 and 2,000 m.',
        color: 'Brown/Green',
    });
});

app.get('/lychee', (req, res) => {
    res.render('lychee', {
        name: 'Litchi chenensis',
        description: 'Litchi chinensis subsp. chinensis is the only commercialized lychee. It grows wild in southern China, northern Vietnam, and Cambodia. It has thin twigs, flowers typically have six stamens, fruit are smooth or with protuberances up to 2 mm (0.079 in).',
        color: 'White/Pink',
    });
});

app.get('/mango', (req, res) => {
    res.render('mango', {
        name: 'Ataulfo',
        description: 'The Ataúlfo mango is a mango cultivar from Mexico. Ataulfo mangos are golden yellow and generally weigh between 6 and 10 ounces, with a somewhat sigmoid shape and a gold-yellow skin. The flesh is not fibrous, and the pit is thin. They were named for grower Ataulfo Morales Gordillo.',
        color: 'Yellow/Orange',
    });
});

app.get('/orange', (req, res) => {
    res.render('orange', {
        name: 'Jaffa',
        description: 'The Jaffa orange, also known as Shamouti orange, is an orange variety with few seeds and a tough skin that makes it particularly suitable for export. Developed by Arab farmers in the mid-19th century, the variety takes its name from the city of Jaffa where it was first produced for export.',
        color: 'Orange',
    });
});

app.get('/strawberry', (req, res) => {
    res.render('mango', {
        name: 'Fragaria moschata',
        description: 'The musk strawberry or hautbois strawberry, is a species of strawberry native to Europe. Its French name hautbois strawberry may be anglicised as hautboy strawberry. The plants are hardy and can survive in many weather conditions. They are cultivated commercially on a small scale, particularly in Italy.',
        color: 'Red',
    });
});

app.get('/tamarind', (req, res) => {
    res.render('tamarind', {
        name: 'Pithecellobium dulce',
        description: 'Pithecellobium dulce, commonly known as Manila tamarind, Madras thorn, monkeypod tree or camachile, is a species of flowering plant in the pea family, Fabaceae, that is native to the Pacific Coast and adjacent highlands of Mexico, Central America, and northern South America',
        color: 'Brown',
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})