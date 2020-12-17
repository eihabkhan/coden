const SHOP_DATA = {
    desks: {
        id: 1,
        title: 'Desks',
        routeName: 'desks',
        items: [
          {
            id: 1,
            name: 'Ikea MICKE Desk',
            imageUrl: 'https://www.ikea.com/us/en/images/products/micke-desk-white__0773258_PH161164_S5.JPG?f=xl',
            price: 79
          },
          {
            id: 2,
            name: 'UPLIFT Standing Desk',
            imageUrl: 'https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/815x439/products/890/5529/product-image-v2-standing-desk-2__96787.1574721371.jpg?c=2',
            price: 599
          },
          {
            id: 3,
            name: 'Hillsdale L-Shape Executive Desk',
            imageUrl: 'https://secure.img1-fg.wfcdn.com/im/54286824/resize-h800-w800%5Ecompr-r85/4612/46125548/Hillsdale+L-Shape+Executive+Desk.jpg',
            price: 317
          },
          {
            id: 4,
            name: 'Rivet Modern Cross Legged Computer Desk',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91y0WwhrZ-L._AC_SL1500_.jpg',
            price: 80
          },
          {
            id: 5,
            name: 'VECELO Axess Desk with Keyboard Tray',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71oqOF0eNlL._AC_SL1500_.jpg',
            price: 90
          },
          {
            id: 6,
            name: 'Furinno Computer Desk',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Jmpf0gxlL._AC_SL1500_.jpg',
            price: 63
          },
          {
            id: 7,
            name: 'IKEA Linnmon / Alex',
            imageUrl: 'https://www.ikea.com/ma/en/images/products/linnmon-alex-table-white__0737597_PE741188_S5.JPG?f=xl',
            price: 150
          },
          {
            id: 8,
            name: 'ApexDesk Elite',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51EtlQZpc%2BL._AC_SL1200_.jpg',
            price: 600
          },
          {
            id: 9,
            name: 'EUREKA ERGONOMIC',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61SxMgS4l1L._AC_SL1200_.jpg',
            price: 150
          }
        ]
      },
      monitors: {
        id: 2,
        title: 'Monitors',
        routeName: 'monitors',
        items: [
          {
            id: 21,
            name: 'BenQ PD3200U',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71xuQYjADKL._AC_SL1200_.jpg',
            price: 700
          },
          {
            id: 22,
            name: 'LG UltraGear',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81URP-h6aPL._AC_SL1500_.jpg',
            price: 1694
          },
          {
            id: 23,
            name: 'BenQ SW321C',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61PRoMK5-lL._AC_SL1200_.jpg',
            price: 2000
          },
          {
            id: 24,
            name: 'Asus ROG Swift',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Qt%2BK3BTTL._AC_SL1500_.jpg',
            price: 1500
          },
          {
            id: 25,
            name: 'Acer Predator X34',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/612yBrnxozL._AC_SL1400_.jpg',
            price: 1000
          },
          {
            id: 26,
            name: 'Asus Designo Curve MX38VC',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81KjlMXt%2B3L._AC_SL1500_.jpg',
            price: 980
          },
          {
            id: 27,
            name: 'Dell UltraSharp',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71br6lyzhuL._AC_SL1500_.jpg',
            price: 300
          },
          {
            id: 28,
            name: 'BenQ EX3203R',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61dZRjeq2sL._AC_SL1000_.jpg',
            price: 375
          }
        ]
      },
      keyboards: {
        id: 3,
        title: 'Keyboards',
        routeName: 'keyboards',
        items: [
          {
            id: 31,
            name: 'Razer BlackWidow Elite',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81oLMQUj4fL._AC_SL1500_.jpg',
            price: 130
          },
          {
            id: 32,
            name: 'ANNE PRO 2',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61NrWLtBXFL._AC_SL1500_.jpg',
            price: 109
          },
          {
            id: 33,
            name: 'Kinesis Freestyle Edge',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81JMro63zNL._AC_SL1500_.jpg',
            price: 200
          },
          {
            id: 34,
            name: 'Das Keyboard 4',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61dV%2BaYlNmL._AC_SL1500_.jpg',
            price: 169
          },
          {
            id: 35,
            name: 'Keychron K2',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61efvyxdAZL._AC_SL1200_.jpg',
            price: 85
          }
        ]
      },
      mice: {
        id: 4,
        title: 'Mice',
        routeName: 'mice',
        items: [
          {
            id: 41,
            name: 'Logitech G502 Lightspeed',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71uNZAdQOoL._AC_SL1500_.jpg',
            price: 150
          },
          {
            id: 42,
            name: 'Razer DeathAdder v2',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81A11OxpgXL._AC_SL1500_.jpg',
            price: 70
          },
          {
            id: 43,
            name: 'BenQ Zowie',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41IgOkFzDRL._AC_SL1000_.jpg',
            price: 45
          },
          {
            id: 44,
            name: 'Corsair Dark Core RGB Pro SE',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61RdgVQ43TL._AC_SL1500_.jpg',
            price: 90
          },
          {
            id: 45,
            name: 'Logitech G502 Hero',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SL1050_.jpg',
            price: 35
          },
          {
            id: 46,
            name: 'Logitech MX Master 3',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg',
            price: 100
          },
          {
            id: 47,
            name: 'Razer Basilisk v2',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81kFR77tdJL._AC_SL1500_.jpg',
            price: 80
          }
        ]
      },
      headphones: {
        id: 5,
        title: 'Headphones',
        routeName: 'headphones',
        items: [
          {
            id: 51,
            name: 'Sony WH-1000XM4',
            imageUrl: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg',
            price: 350
          },
          {
            id: 52,
            name: 'Apple AirPods Pro',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg',
            price: 250
          },
          {
            id: 53,
            name: 'Marshall Mid ANC',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51eM0KLHyxL._AC_SL1000_.jpg',
            price: 182
          },
          {
            id: 54,
            name: 'Jabra Elite 45h',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71GuE%2BNfnjL._AC_SL1500_.jpg',
            price: 100
          },
          {
            id: 55,
            name: 'Sennheiser Consumer Audio HD',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2Ba3CTMdpL._AC_SL1500_.jpg',
            price: 146
          },
          {
            id: 56,
            name: 'Anker Soundcore',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61WMj2oNkpL._AC_SL1500_.jpg',
            price: 20
          }
        ]
      }
    }

export default SHOP_DATA