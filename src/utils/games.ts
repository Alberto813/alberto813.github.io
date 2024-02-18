const games = [
    {
        id: 'g01t1f1zz',
        name: 'Zombies Zombie',
        image: '',
        coins: '2',
        tickets: 'Pocos',
        how2play: 'Disparar a los zombies con chorros de agua'
    },{
        id: 'g02t1f1bb',
        name: 'Basquetball Baby',
        image: '',
        coins: '2',
        tickets: 'Pocos',
        how2play: 'Anotar puntos en la canasta'
    },{
        id: 'g03t1f1dp',
        name: 'Dog Pounder',
        image: '',
        coins: '1',
        tickets: 'Pocos',
        how2play: 'Presionar el boton para empujar las pelotas a la boca del perro'
    },{
        id: 'g04t1f1kl',
        name: 'King Lion',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Jalar la palanca para girar la ruleta'
    },{
        id: 'g05t1f1md',
        name: 'Monster Drop',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Presionar el boton para soltar una pelota y que caiga en un hoyo'
    },{
        id: 'g06t1f1pr',
        name: 'Pirates Revenge',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'Presionar Start para comenzar a girar la ruleta y detenerla con Stop o Force Stop'
    },{
        id: 'g07t1f1tq',
        name: 'Treasure Quest',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Girar la ruleta'
    },{
        id: 'g08t1f1mb',
        name: 'Monkey Ball',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Rodar la bola para controlar a un mono mientras recojes bananas'
    },{
        id: 'g09t1f1kfp',
        name: 'Kung Fu Panda',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'golpear los botones que indica el juego para agarrar los objetos que aparecen'
    },{
        id: 'g10t1f1wd',
        name: 'Wacky Ducks',
        image: '',
        coins: 'NA',
        tickets: 'NA',
        how2play: 'NA'
    },{
        id: 'g11t1f1wof',
        name: 'Wheel of fortune',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Girar la ruleta y resolver asertijos'
    },{
        id: 'g12t1f1si',
        name: 'Space Invaders',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'Defender torretas de los aliens, destruirlos para sumar puntos'
    },{
        id: 'g13t0f1bt',
        name: 'Billar',
        image: '',
        coins: '3',
        tickets: 'No',
        how2play: 'Billar Clasico'
    },{
        id: 'g14t1f1bh',
        name: 'Black Hole',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Tirar del resorte para empujar una pelota por el remolino'
    },{
        id: 'g15t1f1giu',
        name: 'Gear it up!',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'Pulsar el boton para subir la pelota a travez de 3 turcas para girar una ruleta'
    },{
        id: 'g16t1f1ror',
        name: 'River of Riches',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'Capturar el oro y gemas que corren a travez del rio'
    },{
        id: 'g17t1f1fn',
        name: 'Fruit Ninja',
        image: '',
        coins: '2',
        tickets: 'Pocos a Algunos',
        how2play: 'Cortar las frutas como el juego clasico'
    },{
        id: 'g18t1f1dond',
        name: 'Deal or not deal',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Elegir un maletin y descartar otros'
    },{
        id: 'g19t1f1ubp',
        name: 'Ultimate big punch',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'Golpear el puno de boxeo para acumular puntaje'
    },{
        id: 'g20t1f1lb',
        name: 'Lets bounce',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'Tirar pelotas para activar placas y sumar puntos'
    },{
        id: 'g21t1f1op',
        name: 'Ocean Pearls',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Tirar una pelota a travez de guias que mueven la pelota a la izquierda o derecha'
    },{
        id: 'g22t1f1saw',
        name: 'Slam a winner',
        image: '',
        coins: '2',
        tickets: 'Pocos a Muchos',
        how2play: 'Tirar una pelota y hacer que caiga en algun hoyo'
    },{
        id: 'g23t1f1sb',
        name: 'Street Basketball',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'Anotar puntos en la canasta'
    },{
        id: 'g24t1f1fb',
        name: 'Fireball',
        image: '',
        coins: '1',
        tickets: 'pocos',
        how2play: 'tirar 9 bolas en agujeros con diferentes cantidades de puntos'
    },{
        id: 'g25t1f1lm',
        name: 'Lane Master',
        image: '',
        coins: '2',
        tickets: 'Algunos',
        how2play: 'Boliche'
    },{
        id: 'g26t1f1tot',
        name: 'Tower of tickets',
        image: '',
        coins: '2',
        tickets: 'nada a muchos',
        how2play: 'Tirar de una palanca y empujar paquetes de tickets a un hoyo'
    },{
        id: 'g27t0f1cm',
        name: 'Carrusel de mariscos',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: 'Carrusel que gira con tematica de mariscos'
    },{
        id: 'g28t1f1rs',
        name: 'Rocket Schoolbus',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'conducir un bus escolar'
    },{
        id: 'g29t0f1a',
        name: 'Avion',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: 'Sentar al nino'
    },{
        id: 'g30t0f1n',
        name: 'Nascar',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: 'Sentar al nino'
    },{
        id: 'g31t0f1t',
        name: 'Tren',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: 'Sentar al nino'
    },{
        id: 'g32t1f1gt',
        name: 'Ghost Town',
        image: '',
        coins: '1',
        tickets: 'Pocos',
        how2play: 'Matar monstruos para recibir tickets'
    },{
        id: 'g33t1f1bw',
        name: 'Bass Wheel',
        image: '',
        coins: '2',
        tickets: 'Pocos a muchos',
        how2play: 'Tirar de la palanca para girar la ruleta'
    },{
        id: 'g34t0f1piud',
        name: 'Pump it up dance',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: 'Bailar'
    },{
        id: 'g35t1f1cr',
        name: 'Crossy Road',
        image: '',
        coins: '2',
        tickets: 'Moderado',
        how2play: 'Curzar las calles con un pollo o pato'
    },{
        id: 'g36t1f1pr',
        name: 'Pirates Revenge 2',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: ''
    },{
        id: 'g37t1f1tt',
        name: 'Ticket Train',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'Mover una grua para tratar de levantar los tickets'
    },{
        id: 'g38t1f1fb',
        name: 'Flappy Bird',
        image: '',
        coins: '2',
        tickets: 'pocos',
        how2play: 'Mover al pajaro entre tubos'
    },{
        id: 'g39t1f1md',
        name: 'Monster Drop 2',
        image: '',
        coins: '2',
        tickets: 'Moderados',
        how2play: ''
    },{
        id: 'g40t1f1si',
        name: 'Space Invaders 2',
        image: '',
        coins: '2',
        tickets: 'moderados',
        how2play: ''
    },{
        id: 'g41t0f1pf',
        name: 'Pickup de Fuego',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g42t0f1cc',
        name: 'Carrusel de Caballos',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g43t0f1g',
        name: 'Grua',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g44t0f2f',
        name: 'Futbolito',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g45t0f2h',
        name: 'Hockey',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g46t0f2twd',
        name: 'The Walking Dead',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g47t0f2m',
        name: 'Motos',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g48t0f2jp',
        name: 'Jurasik Park',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g49t0f2tc',
        name: 'Time Crisis',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g50t0f2aa',
        name: 'Aliens Armagedon',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g51t0f2ng',
        name: 'Neo Geo',
        image: '',
        coins: '1',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g52t0f2ts',
        name: 'Terminator Salvation',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g53t0f2cb',
        name: 'Crusing Blast',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },{
        id: 'g54t0f2de',
        name: 'Dark Escape',
        image: '',
        coins: '2',
        tickets: 'NA',
        how2play: ''
    },
]