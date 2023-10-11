import Cart from "./cart";
import Movie from "./movie";

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it('Должен добавлять фильм в корзину', () => {
        const movie: Movie = new Movie(1, 'Movie 1', 1111,9.99,'Romania','drama',['dive'],124124,6);
        cart.add(movie);
        expect(cart.getAll()).toContain(movie);
    });

    it('должен считать сумму корзины', () => {
        const movie1: Movie = new Movie(2, 'Movie 1', 1111,9.99,'Romania','tragic',['asd'],124124,6);
        const movie2: Movie = new Movie(3, 'Movie 1', 1111,19.99,'Romania','comedy',['1515'],124124,6);
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getTotalCost()).toBe(29.98);
    });

    it('должен считать стоимость со скидкой' , () => {
        const movie1: Movie = new Movie(3, 'Movie 1', 1111,9.99,'Romania','document',['asd'],124124,6);
        const movie2: Movie = new Movie(4, 'Movie 1', 1111,19.99,'Romania','detective',['asd'],124124,6);
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getTotalCostWithDiscount(10)).toBe(26.98);
    });

    it('should remove an item from the cart by id', () => {
        const movie1: Movie = new Movie(5, 'Movie 1', 1111,9.99,'Romania','biography',['asd'],124124,6);
        const movie2: Movie = new Movie(6, 'Movie 1', 1111,19.99,'Romania','historic',['asd'],124124,6);
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getAll()).toContain(movie1);
        cart.removeById(1);
        expect(cart.getAll()).not.toContain(movie1);
    });
});