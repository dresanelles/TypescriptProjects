export interface IMovie {
    id: number;
    title: string;
    year: number;
    genre: string;
    director: string;
    duration: number;
    description: string;
    rating: number;
    image: string;
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: "Scarface",
    year: 1983,
    genre: "Crime/Drama",
    director: "Brian De Palma",
    duration: 170,
    rating: 8.3,
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    description: "Un refugiado cubano frío y ambicioso llega a Miami y asciende hasta convertirse en un poderoso y despiadado capo de la droga."
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crimen",
    director: "Francis Ford Coppola",
    duration: 175,
    rating: 9.2,
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description: "La historia de una poderosa familia de la mafia y el ascenso de un nuevo líder dentro de ella."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Acción",
    director: "Christopher Nolan",
    duration: 152,
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman se enfrenta a un criminal que busca sumir a Ciudad Gótica en el caos."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crimen",
    director: "Quentin Tarantino",
    duration: 154,
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description: "Varias historias criminales se conectan de manera inesperada en Los Ángeles."
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    duration: 142,
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    description: "Un hombre de gran corazón participa accidentalmente en importantes acontecimientos históricos."
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Ciencia ficción",
    director: "Christopher Nolan",
    duration: 148,
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    description: "Un equipo especializado entra en los sueños para implantar una idea en la mente de una persona."
  },
  {
    id: 7,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    director: "David Fincher",
    duration: 139,
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    description: "Un oficinista insatisfecho crea un club secreto junto a un misterioso vendedor de jabón."
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    genre: "Ciencia ficción",
    director: "Lana y Lilly Wachowski",
    duration: 136,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    description: "Un programador descubre que el mundo en el que vive es una simulación controlada por máquinas."
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    genre: "Crimen",
    director: "Martin Scorsese",
    duration: 145,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    description: "Un joven se introduce en el mundo del crimen organizado y conoce sus beneficios y consecuencias."
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    genre: "Ciencia ficción",
    director: "Christopher Nolan",
    duration: 169,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    description: "Un grupo de astronautas viaja por el espacio en busca de un nuevo hogar para la humanidad."
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genre: "Suspenso",
    director: "Bong Joon-ho",
    duration: 132,
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "Una familia con dificultades económicas comienza a trabajar para una familia adinerada."
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    genre: "Acción",
    director: "Ridley Scott",
    duration: 155,
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
    description: "Un general romano traicionado busca justicia mientras lucha como gladiador."
  },
  {
    id: 13,
    title: "The Lion King",
    year: 1994,
    genre: "Animación",
    director: "Roger Allers y Rob Minkoff",
    duration: 88,
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    description: "Un joven león debe aceptar su destino y recuperar el reino que le pertenece."
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    director: "Damien Chazelle",
    duration: 106,
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    description: "Un joven baterista se enfrenta a un exigente profesor que busca llevarlo al límite."
  },
  {
    id: 15,
    title: "Back to the Future",
    year: 1985,
    genre: "Aventura",
    director: "Robert Zemeckis",
    duration: 116,
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
    description: "Un adolescente viaja accidentalmente al pasado en una máquina del tiempo."
  },
  {
    id: 16,
    title: "Spirited Away",
    year: 2001,
    genre: "Animación",
    director: "Hayao Miyazaki",
    duration: 125,
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description: "Una niña entra en un mundo mágico y debe encontrar la forma de salvar a sus padres."
  },
  {
    id: 17,
    title: "Coco",
    year: 2017,
    genre: "Animación",
    director: "Lee Unkrich",
    duration: 105,
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    description: "Un niño apasionado por la música viaja al mundo de los muertos para conocer su historia familiar."
  },
  {
    id: 18,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    director: "Todd Phillips",
    duration: 122,
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "Un hombre marginado por la sociedad comienza una transformación que causa caos en la ciudad."
  },
  {
    id: 19,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Acción",
    director: "Anthony y Joe Russo",
    duration: 181,
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    description: "Los héroes sobrevivientes se reúnen para intentar revertir una tragedia universal."
  },
  {
    id: 20,
    title: "The Truman Show",
    year: 1998,
    genre: "Comedia dramática",
    director: "Peter Weir",
    duration: 103,
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w600_and_h900_face/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    description: "Un hombre comienza a sospechar que toda su vida forma parte de un programa de televisión."
  }
];