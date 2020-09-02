type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  summary: string;
};

interface CartItem extends Book {
  amount: number;
}
