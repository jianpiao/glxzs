/**
 * Mocking client-server processing
 */
const _products = [
    { "id": 1, "title": "锤子手机", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M白色寸杉", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "小米电视", "price": 19.99, "inventory": 5 }
]

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}