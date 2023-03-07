
export interface Select{
    title: string;
    status: boolean
    option: string[];
    id : number
}


const Text = ['Tour map']
const ImgMap = ['/assets/images/map.jpg']


export const TourSelectMap:Select[]  = [
    {
        title : "Map of the tour",
        status: false,
        option: ImgMap,
        id: 1

    },
    {
        title : "Text",
        status: false,
        option: Text,
        id:2
       
    }
]