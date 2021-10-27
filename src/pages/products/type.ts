export default interface ProductInputProps {
  id: number;
  name: string;
  rawPrice: number;
  price: number;
  code: string;
  color: string;
  image: string;
  categoryName: string;
  description: string;
  stockCount: number;
  expirationDate: Date;
}
