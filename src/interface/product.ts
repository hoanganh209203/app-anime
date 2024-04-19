export default interface productType {
    _id?: string,
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
    images?: string[],
    quanlity: number
}

export type menu = {
    slug: string,
    title: string
}
