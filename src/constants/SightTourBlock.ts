export interface durationTypes {
    days: string,
    durationType: string,
}

export interface itenerariesTypes {
    desc: string,
    facts: string,
    image: string,
    itinerary: string,
    overnight: string,
}

export default interface TourInfoTypes {
    slice(arg0: number, arg1: number): unknown;
    aboutTour: string,
    accommodaton:Array<string>,
    bringThings: Array<string>,
    category: string,
    PriceDoesntInclude: string,
    duration: durationTypes,
    include: string,
    itenerariesDays: itenerariesTypes,
    itinerary: Array<string>,
    loveReasons: Array<string>,
    photoes: Array<string>,
    time: string,
}

export interface SightTourArrProps{
    createdAt: Date;
    image: string;
    subtitle: string;
    title: string;
    tourInfo: TourInfoTypes[];
};
