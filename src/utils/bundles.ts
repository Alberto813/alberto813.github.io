const bundles = [
    {
        title: "paquete 1",
        description: "Titulo del paquete",
        itemsIncluded: ["2 Pizzas XL","10L de bebida","20 Minis de 10 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","4Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"20 personas",
        price:"$4,000 MXN",
    },
    {
        title: "paquete 2",
        description: "Hotdogs ",
        itemsIncluded: ["42 Hotdogs","10L de bebida","20 Minis de 20 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","4Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"20 personas",
        price:"$5,350 MXN"
    },
    {
        title: "paquete 3",
        description: "Mini pizzas para todos",
        itemsIncluded: ["21 Mini pizzas","10L de bebida","20 Minis de 10 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","4Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"20 personas",
        price:"$4,600 MXN"
    },
    {
        title: "paquete 4",
        description: "Pizza ",
        itemsIncluded: ["3 Pizzas XL","10L de bebida","20 Minis de 10 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","4Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve","8 Centros de mesa","Torre de globos"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"30 personas",
        price:"$6,950 MXN"
    },
    {
        title: "paquete 5",
        description: "Paquete de Hotdogs+",
        itemsIncluded: ["84 Hotdogs","20L de bebida","20 Minis de 10 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","4Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve","10 Centros de mesa","Torre de globos"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"40 personas",
        price:"$9,850 MXN"
    },
    {
        title: "paquete 6",
        description: "Paquete de Pizzas Extra",
        itemsIncluded: ["4 Pizzas XL","Bandeja de spaguetti","20L de bebida","20 Minis de 10 fichas","35 Fichas para cumpleanero","Regalo sorpresa","Anfitriona","5Hrs de evento","Desechables para comida","Mobiliario","Servicio de limpieza","Mantel para mesa principal","20 Postres de nieve","10 Centros de mesa"],
        icon: `<svg xmlns= width="24" height="24" fill="currentColor"><path d="M9.76 2.021a.995.995 0 0 0-.989.703L3.579 19.166a1 1 0 0 0 1.255 1.255l16.442-5.192a.991.991 0 0 0 .702-.988C21.6 7.666 16.334 2.4 9.76 2.021zM10 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"></path></svg>`,
        people:"50 personas",
        price:"$9,550 MXN"
    },
]

export { bundles }