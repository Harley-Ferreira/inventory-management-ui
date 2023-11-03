export default interface Product {
    id: number | null;
    code: number | null;
    name: string | null;
    description: string | null;
    category: string | null;
    price: number | null;
    minimumStock: number | null;
}