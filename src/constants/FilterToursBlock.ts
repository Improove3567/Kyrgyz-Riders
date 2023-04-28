export interface Option {
    name?: string;
    id?: number | string;
    status?: boolean;
}
interface ToursSelect {
    name: string;
    option: Option[];
    status: boolean;
    id: number;
    select: boolean
}

export const ToursOptions: Option[] = [
    {
        name: "All tours",
        id: 1,
        status: true
    },
    {
        name: "Most popular",
        id: 2,
        status: false
    },
    {
        name: "Upcoming",
        id: 3,
        status: false
    },
    {
        name: "Combined",
        id: 4,
        status: false
    },
    {
        name: "Horse riding",
        id: 5,
        status: false
    },
    {
        name: "Road trip",
        id: 6,
        status: false
    },
    {
        name: "Road",
        id: 7,
        status: false
    },
    {
        name: "Cultural",
        id: 8,
        status: false
    },
    {
        name: "Trekking",
        id: 9,
        status: false
    },
    {
        name: "Winter tours",
        id: 10,
        status: false
    }
]
export const PlacesIWantOptions: Option[] = [
    {
        name: "Song-Kol Lake",
        id: 1,
        status: false
    },
    {
        name: "Kel-Suu Lake",
        id: 2,
        status: false
    },
    {
        name: "Tash-Rabat Caravan Saray",
        id: 3,
        status: false
    },
    {
        name: "Kol-Ukok Lake",
        id: 4,
        status: false
    },
    {
        name: "Ala-Kol Lake",
        id: 5,
        status: false
    },
    {
        name: "Altyn-Arashan",
        id: 6,
        status: false
    },
    {
        name: "Kol-Tor Lake",
        id: 7,
        status: false
    },
    {
        name: "Grigorievka gorge",
        id: 8,
        status: false
    },
    {
        name: "Barskoon gorge",
        id: 9,
        status: false
    },
    {
        name: "Skazka canyons",
        id: 10,
        status: false
    },
    {
        name: "Jety-Oguz canyons",
        id: 11,
        status: false
    },
    {
        name: "Jurgalang village",
        id: 12,
        status: false
    },
    {
        name: "Turnaluu Lake",
        id: 13,
        status: false
    },
    {
        name: "Boz-Uchuk Lakes",
        id: 14,
        status: false
    },
    {
        name: "Sary-Chelek",
        id: 15,
        status: false
    },
    {
        name: "Ala-Archa national Park",
        id: 16,
        status: false
    },
    {
        name: "Chong-Kemin gorge",
        id: 17,
        status: false
    },
    {
        name: "Arslanbop walnut forest",
        id: 18,
        status: false
    },
    {
        name: "Kara-Kamysh Lake",
        id: 19,
        status: false
    },
    {
        name: "Murdash village",
        id: 20,
        status: false
    },
    {
        name: "Lenin Peak Base camp",
        id: 21,
        status: false
    },
    {
        name: "Ysyk-kol Lake",
        id: 22,
        status: false
    },
    {
        name: "Juuku valley",
        id: 23,
        status: false
    },
    {
        name: "Kok-Jaiyk valley",
        id: 24,
        status: false
    },
    {
        name: "Kyzyl-Oli villay",
        id: 25,
        status: false
    },
    {
        name: "Kochkor",
        id: 26,
        status: false
    },
    {
        name: "Karakol",
        id: 27,
        status: false
    },
    {
        name: "Burana Tower",
        id: 28,
        status: false
    },
    {
        name: "Bokonbaev",
        id: 29,
        status: false
    },
    {
        name: "Alay Moutains",
        id: 30,
        status: false
    },
    {
        name: "Besh-Tash Lake",
        id: 31,
        status: false
    },
    {
        name: "Enilchek",
        id: 32,
        status: false
    },
    {
        name: "Sary-Jaz",
        id: 33,
        status: false
    },
    {
        name: "Karkyra",
        id: 34,
        status: false
    }


]
export const Duraion: Option[] = [
    {
        name: "1 days",
        id: 1,
        status: false
    },
    {
        name: "2 days",
        id: 2,
        status: false
    },
    {
        name: "3 days",
        id: 3,
        status: false
    },
    {
        name: "4 days",
        id: 4,
        status: false
    },
    {
        name: "5 days",
        id: 5,
        status: false
    },
    {
        name: "6 days",
        id: 6,
        status: false
    },
    {
        name: "7 days",
        id: 7,
        status: false
    },
    {
        name: "8 days",
        id: 8,
        status: false
    },
    {
        name: "9 days",
        id: 9,
        status: false
    },
    {
        name: "10 days",
        id: 10,
        status: false
    },
    {
        name: "11 days",
        id: 11,
        status: false
    },
    {
        name: "12 days",
        id: 12,
        status: false
    },
    {
        name: "13 days",
        id: 13,
        status: false
    },
    {
        name: "14 days",
        id: 14,
        status: false
    },
    {
        name: "15 days",
        id: 15,
        status: false
    },
    {
        name: "16 days",
        id: 16,
        status: false
    },
    {
        name: "17 days",
        id: 17,
        status: false
    },
    {
        name: "18 days",
        id: 18,
        status: false
    },
    {
        name: "19 days",
        id: 19,
        status: false
    },
    {
        name: "20 days",
        id: 20,
        status: false
    },
    {
        name: "21 days",
        id: 21,
        status: false
    }
]
export const ActivateDuration: Option[] = [
    {
        name: "Horse riding",
        id: 1,
        status: false
    },
    {
        name: "High-trekking",
        id: 2,
        status: false
    },
    {
        name: "Camping",
        id: 3,
        status: false
    },
    {
        name: "Sleeping at yurt",
        id: 4,
        status: false
    },
    {
        name: "Road trip",
        id: 5,
        status: false
    },
    {
        name: "Expedition",
        id: 6,
        status: false
    },
    {
        name: "Self-driving",
        id: 7,
        status: false
    },
    {
        name: "Skiing",
        id: 8,
        status: false
    },
    {
        name: "Rafting",
        id: 9,
        status: false
    },
    {
        name: "Paradliding",
        id: 10,
        status: false
    },
    {
        name: "Visiting local bazaars",
        id: 11,
        status: false
    },
    {
        name: "Swimming in hot springs",
        id: 12,
        status: false
    },
    {
        name: "Souvenir shopping",
        id: 13,
        status: false
    },
    {
        name: "Boat riding",
        id: 14,
        status: false
    },
    {
        name: "Relaxing on beach",
        id: 15,
        status: false
    },
    {
        name: "Excursions to museum",
        id: 16,
        status: false
    },
    {
        name: "City tour",
        id: 17,
        status: false
    },
    {
        name: "Visiting animal market",
        id: 18,
        status: false
    },
    {
        name: "Agro-tourism",
        id: 19,
        status: false
    }
    ,
    {
        name: "Watching Kyrgyz movies",
        id: 20,
        status: false
    }
]
export const StartFrom: Option[] = [
    {
        name: "Bishkek",
        id: 1,
        status: false
    },
    {
        name: "Karakol",
        id: 2,
        status: false
    },
    {
        name: "Osh",
        id: 3,
        status: false
    },
    {
        name: "Kochkor",
        id: 4,
        status: false
    },
    {
        name: "Kyzart",
        id: 5,
        status: false
    },
    {
        name: "Naryn",
        id: 6,
        status: false
    },
    {
        name: "Bokonbaevo",
        id: 7,
        status: false
    }
]
export const Tours: ToursSelect[] = [
    {
        name: 'Tours',
        option: ToursOptions,
        status: false,
        id: 1,
        select: true
    },
    {
        name: 'Duration',
        option: Duraion,
        status: false,
        id: 2,
        select: true

    }

]
export const DetailTours: ToursSelect[] = [
    {
        name: 'Places',
        option: PlacesIWantOptions,
        status: false,
        id: 1,
        select: false
    },
    {
        name: 'Activities',
        option: ActivateDuration,
        status: false,
        id: 2,
        select: false
    },
    {
        name: 'Duration',
        option: Duraion,
        status: false,
        id: 3,
        select: true
    },
    {
        name: 'Start from',
        option: StartFrom,
        status: false,
        id: 4,
        select: true
    },
]