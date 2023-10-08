import Buyable from "./buyable";

export default class Movie implements Buyable {
    constructor(
        public id: number,
        public name: string,
        public year: number,
        public price: number,
        public country: string,
        public tagline: string,
        public genres: string[],
        public duration: number,
        public discount?: number,
    ) {
    }
}

// type Movie = {
//     id: number,
//     name: string,
//     year?: number,
//     country?: string,
//     tagline?: string,
//     genre?: string,
//     time?: number
// }
// let movie: Movie = {
//     id: 124,
//     name: 'The Avengers',
//     year: 2012,
//     country: 'USA',
//     tagline: '"Avengers Assemble!"',
//     genre: 'Фантастика, боевик, фэнтези',
//     time: 137
// }
//
// function add(item): void {
//     this.items.push(item)
// }