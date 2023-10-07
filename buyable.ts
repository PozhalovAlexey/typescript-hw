export default interface Buyable {
    id: number,
    name: string,
    price: number,
    discount?: number
    year: number,
    country: string,
    tagline: string,
    genres: string[],
    duration: number
}
