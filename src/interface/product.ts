export default interface productType {
    images: {
    path: string
      },
      _id: string,
      name: string,
      price: number,
      description:string,
      categoryId?: string,
}


export type menu = {
    slug: string,
    title: string
}
