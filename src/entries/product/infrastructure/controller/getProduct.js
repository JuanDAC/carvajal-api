
const getRoutes = () => {
    app.get('/products/:userId', (req, res) => {/*...*/ });
    app.get('/products', (req, res) => {/*...*/ });
}

module.exports = { getRoutes };