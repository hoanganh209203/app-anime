export default interface productType {
    id: string;
    name: string;
    price: number;
    images: {
       path: string;
       _id: string;
    }
    view?: number;
    rating?: number;
}


export type menu = {
    path: string,
    title: string
}
