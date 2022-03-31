class Cart {
  private products: Array<Product> = [];

  insert(...products: Array<Product>): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  totalProducts(): number {
    return this.products.length;
  }

  amount(): string {
    const amount = this.products.reduce(
      (acc, product) => acc + product.price,
      0,
    );

    return amount.toFixed(2);
  }
}

class Product {
  constructor(public name: string, public price: number) {}
}

/*
Ambas as classes são independentes, mas a class Cart só funciona em sua totalidade
quanto tem no mínimo 1 produto.
*/

const shirt = new Product('Shirt', 50);
const hat = new Product('Hat', 35.5);

const cart = new Cart();

cart.insert(shirt, hat);

console.log(cart.totalProducts());

console.log(cart.amount());
