export type Song =       {
  number: number,
  title: string,
  engTitle?: string,
  link: string,
  download: string,
  sheet?: string,
  poem?: string
}

export type Album = {
  title: string,
  engTitle: string,
  catDescription: string,
  engDescription: string,
  img: string,
  year: number,
  spotifyLink: string,
  youtubeLink: string,
  songs: Song[]
}

export const albums: Album[] = [
  {
    title: "Captura subtil",
    engTitle: "Subtle Capture",
    catDescription: "Aquest primer treball, on cada cançó va acompanyada d'un poema, és un homenatge a aquelles emocions i intuïcions que se'ns mouen per dins, profundes i sense fer soroll... fins que afloren de cop i ho prenen tot.",
    engDescription: "This first work, where each song is accompanied by a poem, pays homage to the emotions and intuitions that reside in our depths, often silent... until they suddenly emerge and seize our awareness.",
    img: "/captura_subtil.jpg",
    year: 2016,
    spotifyLink: "https://open.spotify.com/intl-es/album/3kw6YVcxOHF78yoStWeFGV?si=CUCczvHQTyi-toGwUFgFiw",
    youtubeLink: "https://www.youtube.com/watch?v=4l1vCxnO8D4",
    songs: [
      {
        number: 1,
        title: "Aquell petit arbre",
        engTitle: "Little Tree",
        link: "https://open.spotify.com/embed/track/6lGpaxPe78iSqsCxMu6KLx?utm_source=generator", 
        download: "https://docs.google.com/uc?export=download&id=1Qou-tYSqi56I3UQe98Tpor_POLdUWVVE",
        sheet: "https://docs.google.com/file/d/1GCmfvdGbjNxH8acGMFwcHT9w0ITrLfvA/view",
        poem: "aquell-petit-arbre"
      },
      {
        number: 2,
        title: "Cada gota",
        engTitle: "Every Raindrop",
        link: "https://open.spotify.com/embed/track/2kOtn5qrSKarC0o4fVUagd?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1V5ZOb_FBWT2KS-1OcF28fVSlYK0NpAt0",
        sheet: "https://docs.google.com/file/d/11iMuvQNk62FEWCMDP7ksDon6qTLEp-Sj/view",
        poem: "cada-gota"
      },
      {
        number: 3,
        title: "Castell de sorra",
        engTitle: "Sandcastle",
        link: "https://open.spotify.com/embed/track/6ZcXLQD5aybm9ThhyAJoIy?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1sDvEG7H6wqmEI-53KgxDWs0quOW1apgw",
        sheet: "https://docs.google.com/file/d/16qj2wuD869uL2PuBisaGUcNbOfAqSipC/view",
        poem: "castell-de-sorra",
      },
      {
        number: 4,
        title: "Fidipides",
        engTitle: "Pheidippides",
        link: "https://open.spotify.com/embed/track/1hLRRBcJqBLWT7IjMv6qiX?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1dwhrH-BCxZJ7UAyTPNUvmzkH_guMyVm4",
        sheet: "https://docs.google.com/file/d/1huNbNJJt0iyng83gRuMhFlt-WOXJg9Li/view",
        poem: "fidipides"
      },
      {
        number: 5,
        title: "Seguirem buscant",
        engTitle: "We Will Keep Searching",
        link: "https://open.spotify.com/embed/track/0QkFGZ3tpOaYmCdKyGmR0H?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1wJOURRWdcXgQ0_JkGVK4Q3fLw3LpvtTS",
        sheet: "https://docs.google.com/file/d/1umD3Zte_6j23RNNmO2RHxvCmQkl_2QZm/view",
        poem: "seguirem-buscant"
      },
      {
        number: 6,
        title: "El bosc dels records",
        engTitle: "The Forest of Memories",
        link: "https://open.spotify.com/embed/track/6tzWK9QtnB6TPrNdLwM7Jp?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1uSOaACTgJ9rhME5Bel8p9AIezW6J0geG",
        sheet: "https://docs.google.com/file/d/1PHpRpaA-LnvkmulMl1l60gIiz20o9OUe/view",
        poem: "el-bosc-dels-records"
      },
      {
        number: 7,
        title: "Pres per dins",
        engTitle: "Caught on the Inside",
        link: "https://open.spotify.com/embed/track/2HrHAmz4B25Ifxl4Stzous?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1cOWRRVLIN9S_2-QLRhNe25ATI-wef9Hs",
        sheet: "https://docs.google.com/file/d/1Al7N__RBMfAT2cJFnpKOdBLDSMJsDNSe/view",
        poem: "pres-per-dins"
      },
      {
        number: 8,
        title: "Xiprers",
        engTitle: "Cypresses",
        link: "https://open.spotify.com/embed/track/4ul9fARx7F3r830boI6lYK?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1-i6cg18RvsJe25saZuRAV7D5NsLg9PXj",
        sheet: "https://docs.google.com/file/d/1HqqXbqp79BArjVrHLxO2Ms5q__3ffvCi/view",
        poem: "xiprers"
      },
      {
        number: 9,
        title: "Ballarismes",
        engTitle: "Dancerisms",
        link: "https://open.spotify.com/embed/track/1zo7kvQj0Hs1PtY9ohCggJ?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=18XybJL5LBgVwgaMWX-_tLZr3Xj3NOp6r",
        sheet: "https://docs.google.com/file/d/1151QDBGxxLgLnj5LbHhO5VlPIYhz_tgc/view",
        poem: "ballarismes"
      },
      {
        number: 10,
        title: "D'entre els cels",
        engTitle: "Up from the Skies",
        link: "https://open.spotify.com/embed/track/1CyRwq3N64y7Awd3RCr9oT?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1N6NNd2vJ0_KDI-3PcOt3Kq0BuSlAnKSU",
        sheet: "https://docs.google.com/file/d/184o3cK8mMyfdw21oZbkdHD15sqF3CIXO/view",
        poem: "d-entre-els-cels"
      },
      {
        number: 11,
        title: "Allegro",
        engTitle: "",
        link: "https://open.spotify.com/embed/track/34B6IW4WzKrOfePItO8Z4v?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1PGj9uRFLdqWUAtP1anH8yZRrHMCjnxyb",
        sheet: "https://docs.google.com/file/d/1vNjiz4q0_04xlM9XRn8e0PgBjFtfKGH2/view"
      }
    ]
  },
  {
    title: "Becaines d'estiu",
    engTitle: "Summer Siesta",
    catDescription: "Single compost durant dos dies mandrosos d'estiu, d'aquells xafogosos, on el bon temps se't tira a sobre... la cançó vol captar aquest esperit estiuenc.",
    engDescription: "Composed during two idle summer days, when the sun yellows the landscape and the heat invades everything, this single attempts to capture the essence of this summery image.",
    img: "/becaines_destiu.jpg",
    year: 2017,
    spotifyLink: "https://open.spotify.com/intl-es/album/3NZSl6a63jfHvzVfrFjsoj?si=xsNTB3nmR9i33vm6IP7RVg",
    youtubeLink: "https://www.youtube.com/watch?v=ShiWROJ5ARA",
    songs: [
      {
        number: 1,
        title: "Becaines d'estiu",
        engTitle: "Summer Siesta",
        link: "https://open.spotify.com/embed/track/4AhTQjlaS4oAJI5pG1fZBx?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1oNLDPSTv1JWPKEN8baxMEO8Sug2NqJJk"
      },
    ]
  },
  {
    title: "Versions I",
    engTitle: "",
    catDescription: "Recull de versions de cançons ja existents, adaptades a guitarra sola. Totes les peces, d'origens diversos, es caracteritzen pel seu so calmat i familiar.",
    engDescription: "Collection of 8 versions of existing songs, adapted for solo guitar. All the pieces, from various origins, are characterized by their tranquil and familiar sound.",
    img: "/versions.jpg",
    year: 2018,
    spotifyLink: "https://open.spotify.com/intl-es/album/2699M4nijbfOqZ7IdUYXu6?si=LgRglsEnThSi1zuKrn0Ovw",
    youtubeLink: "https://www.youtube.com/watch?v=NfcBHuHtOe0",
    songs: [
      {
        number: 1,
        title: "Reflections in D",
        link: "https://open.spotify.com/embed/track/0P1khNiNsJYhdI8wehob5h?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1qmxWYNm76UKBJOApkw4l86cetFTdmhi7",
        sheet: "https://docs.google.com/file/d/1X_Vn3TBTaLwjSm7K4-rYKFMNtMY3d8pj/view"
      },
      {
        number: 2,
        title: "Cançó de suburbi",
        engTitle: "Song from the Suburbs",
        link: "https://open.spotify.com/embed/track/7Elh2aI0ypmpA0XkOIiGvr?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1XqJPpe5nhk1zKlsn4a6Bu5W5SUWsox1g",
        sheet: "https://docs.google.com/file/d/1cmJp4qIJbs4uTEKU2w74gEyQCwVy6s1C/view"
      },
      {
        number: 3,
        title: "Bad Day",
        link: "https://open.spotify.com/embed/track/5N9t6UjxU3pbgbe8ntYtck?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1ASRsC-Sc9_RqO7k_7Yzljecz21FdGt8b",
        sheet: "https://docs.google.com/file/d/12rJ_CjRQHw48sQaghsBsBBve8c8sNpDo/view"
      },
      {
        number: 4,
        title: "The Girl from Ipanema",
        link: "https://open.spotify.com/embed/track/3TlqbLo1LCcimCSZudMCJh?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1ECQ5VhZ7rA870_VEQ8HByxkON09Mb0bS"
      },
      {
        number: 5,
        title: "Waltz of Chihiro",
        link: "https://open.spotify.com/embed/track/7ASB0sA4rpe0nMwXcJbt5i?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=12WBZlLQIRt4wSlhDHGhYFSBN3GExRK1h",
        sheet: "https://docs.google.com/file/d/1XyVP17cpisl-CW9QOAtYxiJ4evIwmaO0/view"
      },
      {
        number: 6,
        title: "Fletcher's Song in a Club",
        link: "https://open.spotify.com/embed/track/3d5ndV2Q1pyFvZ9FVfQ1eK?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1VMQ3xXdq5Dp_ycleOAvORwF27zzaJlzT",
        sheet: "https://docs.google.com/file/d/1ZRsW9gNUZPBnt7x6NnwgYTGHn8gqchbf/view"
      },
      {
        number: 7,
        title: "You Raise Me Up",
        link: "https://open.spotify.com/embed/track/7xfMQopRqBWdHSCMx5BpOa?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1c3QSf0hyN7AAdelMOFjUs4c02KwgSWvV"
      },
      {
        number: 8,
        title: "What a Wonderful World",
        link: "https://open.spotify.com/embed/track/3g4bPzeHygSBBhUKPzsH6i?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1KR7Phb_c20Cv_JHSE9mekAg-8JMz5am7",
        sheet: "https://docs.google.com/file/d/1Jx3iqaTXpMs2TKzELh2pmUSTlikXIEAY/view"
      }
    ]
  },
  {
    title: "El fred i la primavera",
    engTitle: "Breeze & Spring",
    catDescription: "Aquest últim àlbum, més madur i de caire conceptual, busca plasmar musicalment l'ampli ventall d'emocions que som capaços de sentir, i la intensitat amb què poden aparèixer, esvanir-se, conviure, confondre's... Tristesa, desig, dubte, il·lusió, dolor, enyor, transformació... som barreges de tot això i mil forces més, en xoc continu.",
    engDescription: "This latest album, more mature and conceptual, aims to express, through music, the wide spectrum of emotions we experience and the intensity with which they emerge, fade, coexist, and intertwine. From sadness, desire, and doubt to joy, yearning, and rebirth, we embody a blend of these and many other forces in a continuous collision.",
    img: "/el_fred_i_la_primavera.jpg",
    year: 2022,
    spotifyLink: "https://open.spotify.com/intl-es/album/7rV5S7qfyVeDpGZsfrzo1c?si=o6snXPNAQoivGFoguYGYKw",
    youtubeLink: "https://www.youtube.com/watch?v=AdoTT5BJvzs",
    songs: [
      {
        number: 1,
        title: "Flor de cirerer",
        engTitle: "Cherry Blossom",
        link: "https://open.spotify.com/embed/track/6zA3Kg3iICIt4qG4ndjPhv?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1RwU_oi9A20aJMnSlnuQmPQP-xS1xvaey",
        sheet: "https://docs.google.com/file/d/1qZQhzhQXH3ja-B_cDfs4M6SBgM0WPD7d/view"
      },
      {
        number: 2,
        title: "Les fulles verdes",
        engTitle: "Green leaves",
        link: "https://open.spotify.com/embed/track/75w9ztTtsxS4RxNOUTvseI?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1Zp4F9Bn5toDMRNPD0zK70lA2p1mC2Inz",
        sheet: "https://docs.google.com/file/d/1mMMakBsTZDQWTh620ww8S_rXhRrMJN7r/view"
      },
      {
        number: 3,
        title: "Els ocells",
        engTitle: "Birds",
        link: "https://open.spotify.com/embed/track/4yNKDleRhM9aiuFotxPbI3?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1-gGzF3zhtczwT-oPf3fIh-bsFx5IXTkO",
        sheet: "https://docs.google.com/file/d/1nQYCo5nel2rA5o7k0OD1CoJOb22V6Xup/view"
      },
      {
        number: 4,
        title: "Llavor",
        engTitle: "Seed",
        link: "https://open.spotify.com/embed/track/3LiSuTFm8iyDwcsIraTJz7?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=1WoNThuzmSBvYdYyaSEMUoiL24tYpd6Y0",
        sheet: "https://docs.google.com/file/d/1aasUA4yeiIDGxGG7Hn0Z_1PVN1q0T0eQ/view"
      },
      {
        number: 5,
        title: "Els ocells tornen",
        engTitle: "Birds Return",
        link: "https://open.spotify.com/embed/track/1TyCkbpD6sdPbG13G0kbXb?utm_source=generator",
        download: "https://docs.google.com/uc?export=download&id=17Or_ZvGunOdMinP2RtC4Lb5Fs6z1ZSJc",
        sheet: "https://docs.google.com/file/d/1FNsCtwlkYmKSMbm7POdc4daqdLePDFTW/view"
      }
    ]
  }
]