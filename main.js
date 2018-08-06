var app = new Vue({
    el: '#app',
    data: {
        product: "Guitar",
        brand: "Gibson",
        model: "331L",
        selectedVariant: 0,
        inventory: 2,
        inCity: true,
        onSale: true,
        details: ['steel strings', 'woodstock tree', 'vibrato mode'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'brown',
                variantImage: "background: url('http://esommusicstore.com/wp-content/uploads/2017/04/moris-wp-15-600x600.png')",
                variantInventory: 2
            },
            {
                variantId: 2235,
                variantColor: 'pink',
                variantImage: "background: url('https://www.bhphotovideo.com/images/images2500x2500/ibanez_grgm21mvpk_gio_series_gr21m_electric_1217813.jpg')",
                variantInventory: 0
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function(index){
            this.selectedVariant = index;
        },
        removeFromCart: function(){
            if(this.cart > 0){
                this.cart-= 1;
            }
        }
    },
    computed: {
        title: function(){
            return this.product + ' ' + this.brand + ' ' + this.model
        }
    }
})
