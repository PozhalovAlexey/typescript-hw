import Buyable from "./buyable";
import Movie from "./movie";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Movie): void {
        this._items.push(item)
    }

    getAll(): Buyable[] {
        return [...this._items]
    }

    getTotalCost(): number {
        return this._items.reduce((totalCost, item) => totalCost + item.price, 0);
    }

    getTotalCostWithDiscount(discount: number): number {
        let totalCost = this.getTotalCost();
        let discountedCost = totalCost - (totalCost * (discount / 100))
        return discountedCost
    }

    removeById(id: number): void {
        this._items = this._items.filter(item => item.id !== id)
    }
}
const cart = new Cart()
const movie = new Movie(1, 'True detective', 2014, 1000000, 'USA', 'Search', ['detective', 'tragedy'], 416, 5);
cart.add(movie)
