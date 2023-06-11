const products = [
    {
        id: 1,
        category: "lente",
        title: "Lente Zoom Estándar 18-135mm F3.5-5.6 APS-C",
        description: "Montura tipo E, formato APS-C, Lente de zoom estándar de 7,5x, Diseño compacto y ligero",
        price: "50.000",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/360904-1600-auto?v=638014523103870000&width=1600&height=auto&aspect=true",
        stock: 10
    },
    {
        id: 2,
        category: "lente",
        title: "Lente Zoom Gran Angular 10-18mm F4 APS-C",
        description: "Montura tipo E, formato APS-C, Lente de zoom gran angular, Estabilización de SteadyShot óptico",
        price: "76.500",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/168633-1600-auto?v=635883619928400000&width=1600&height=auto&aspect=true",
        stock: 15
    },
    {
        id: 3,
        category: "lente",
        title: "Lente Zoom Teleobjetivo 70-300mm F4.5-5.6 Serie G Full Frame",
        description: "Montura tipo E con formato Full Frame, Zoom teleobjetivo G de Sony, Estabilización de SteadyShot óptico",
        price: "79.999,99",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/360904-1600-auto?v=638014523103870000&width=1600&height=auto&aspect=true",
        stock: 5
    },
    {
        id: 4,
        category: "camara",
        title: "Cámara Digital Mirrorless Full Frame ILCE-7RM5 A7RV (Solo body)",
        description: "La a7R V te permite capturar lo que ves como nunca antes, con procesamiento de inteligencia artificial dedicado para reconocer a tus sujetos y realizarles seguimiento. Los creadores de imágenes disfrutan de un nuevo punto de referencia en cuanto a calidad y resolución de imágenes, así como de una captura de video de hasta 8K, junto con una estabilización de imagen de 8 pasos1Estándares CIPA. Movimiento de balanceo o inclinación únicamente. Lente FE de 50 mm F1,2 GM Exposición prolongada con reducción de ruido desactivada.",
        price: "899.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/361246-1600-auto?v=638025719534630000&width=1600&height=auto&aspect=true",
        stock: 10
    },
    {
        id: 5,
        category: "camara",
        title: "Cámara Digital Mirrorless Full Frame ILCE-7M4 A7IV (Solo body)",
        description: "El sensor, el motor de procesamiento y el enfoque automático basado en inteligencia artificial más recientes se unen a la vanguardista tecnología de fotografía y filmación para crear una experiencia de imagen novedosa y dinámica. La a7 IV es la cámara híbrida ideal y ofrece fotos y películas impactantes, además de conectividad flexible para que transmitas tus imágenes en el momento.",
        price: "799.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/358760-1600-auto?v=637770800401270000&width=1600&height=auto&aspect=true",
        stock: 25
    },
    {
        id: 6,
        category: "camara",
        title: "Cámara Digital Mirrorless APS-C ILCE-6400 A6400 (Solo body)",
        description: "Ligera, compacta y robusta, la a6400 dispone de capacidades y funciones impresionantes. Con el enfoque automático ultrarrápido y el preciso seguimiento de sujetos, es ideal para captar la acción con movimientos rápidos, mientras que su amplia sensibilidad y su impresionante calidad de la imagen la hacen perfecta para cualquier oportunidad fotográfica, tanto para fotografías como para películas.",
        price: "299.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/356537-1600-auto?v=637520520503370000&width=1600&height=auto&aspect=true",
        stock: 10
    },
    {
        id: 7,
        category: "camara",
        title: "Cámara Digital Mirrorless APS-C ILCE-6600 A6600 (Solo body)",
        description: "La a6600 ofrece gran rendimiento y funciones extraordinarias en un cuerpo compacto, con la velocidad de enfoque automático1Basado en investigaciones de Sony a 28 de agosto del 2019, medición interna de conformidad con los estándares CIPA, con una lente tipo E de 18-135 mm y F3,5-5,6 OSS acoplada, Pre-AF desactivado y el visor en funcionamiento.23840 x 2160 píxeles Se requiere una tarjeta SDHC/SDXC de clase 10 o superior para la grabación de películas en formato XAVC S. Se requiere una tarjeta SDHC/SDXC de velocidad UHS-I (U3) para la grabación a 100 Mbps. Conecta este producto a un televisor Sony compatible con HDR (HLG) a través de un cable USB al visualizar películas HDR (HLG).",
        price: "399.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/359390-1600-auto?v=637859766503930000&width=1600&height=auto&aspect=true",
        stock: 1
    },
    {
        id: 8,
        category: "accesorio",
        title: "Tarjeta de Memoria SD 128GB Serie M SF-M128/T2",
        description: "Las tarjetas de memoria de alta velocidad de Sony logran una eliminación rápida del búfer entre las capturas de ráfaga y un flujo de trabajo eficaz al transferir contenido a la computadora.",
        price: "58.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/359110-1600-auto?v=637811800660170000&width=1600&height=auto&aspect=true",
        stock: 100
    },
    {
        id: 9,
        category: "accesorio",
        title: "Tarjeta de Memoria CFExpress Tipo A 640GB CEA-G640T",
        description: "Extremadamente rápidas, confiables y compactas para los profesionales que exigen el máximo rendimiento en las condiciones más extremas. Las tarjetas de memoria CEA-G80T, CEA-G160G, CEA-G320T y CEA-G640T protegen las grabaciones y mejoran el flujo de trabajo de fotógrafos, videógrafos y aficionados.",
        price: "765.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/360684-1600-auto?v=638012842803900000&width=1600&height=auto&aspect=true",
        stock: 2
    },
    {
        id: 10,
        category: "accesorio",
        title: "Tarjeta de Memoria CFExpress Tipo A 320GB CEA-G320T",
        description: "Extremadamente rápidas, confiables y compactas para los profesionales que exigen el máximo rendimiento en las condiciones más extremas. Las tarjetas de memoria CEA-G80T, CEA-G160G, CEA-G320T y CEA-G640T protegen las grabaciones y mejoran el flujo de trabajo de fotógrafos, videógrafos y aficionados.",
        price: "429.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/360672-1600-auto?v=638012840254700000&width=1600&height=auto&aspect=true",
        stock: 5
    },
    {
        id: 11,
        category: "accesorio",
        title: "Sistema de Micrófono Inalámbrico Bluetooth Digital ECM-W2BT",
        description: "Disfruta de una calidad de grabación mejorada y una mayor versatilidad con el ECM-W2BT, el micrófono inalámbrico perfecto para videoblogs. Capta audio nítido sin complicaciones y sin preocuparte por el ruido ambiental o la orientación del micrófono gracias a su configuración inalámbrica y a su diseño omnidireccional, optimizado para captar voces humanas desde cualquier ángulo.",
        price: "109.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/359861-1600-auto?v=637920263058600000&width=1600&height=auto&aspect=true",
        stock: 100
    },
    {
        id: 12,
        category: "accesorio",
        title: "Micrófono de pistola ECM-CG60",
        description: "El micrófono monaural de alto rendimiento con direccionalidad supercardioide mejora la focalización del sonido. Convenientemente compacto con cámaras con lentes intercambiables. Utiliza diversas fuentes de energía para realizar capturas al aire libre durante mucho tiempo.",
        price: "89.999",
        pictureUrl: "https://arsonyb2c.vtexassets.com/arquivos/ids/359875-1600-auto?v=637920366579700000&width=1600&height=auto&aspect=true",
        stock: 8
    },
]

export const getProducts= () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },2000)
    })
}

export const getProductById= (prodcutId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === Number(prodcutId)))
        },2000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        },2000)
    })
}