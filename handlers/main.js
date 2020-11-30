const main = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World!</title></head>');
    res.write('<body>');
    res.write('<h1>some greating text :)</h1>');
    res.write('<hr />');
    res.write('<a href="/users">list of users</a>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};

module.exports.handler = main;
