const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 11,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                {id: 1, name: 'XS'},
                {id: 2, name: 'S'},
                {id: 3, name: 'M'},
                {id: 4, name: 'L'},
                {id: 5, name: 'XL'},
            ]

        }
    }
})
