interface Service<T> {
    getListPage(page: number, pageSize: number): Promisse<T[]>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    register(data: T): Promise<T>;
    getById(id: string): Promise<T | null>;
}