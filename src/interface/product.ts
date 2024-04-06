export default interface productType {
    _id?: number
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: {
        _id: string,
        name: string,
    },
    thumbnail: string,
    images?: string[]
}


export type menu = {
    slug: string,
    title: string
}
