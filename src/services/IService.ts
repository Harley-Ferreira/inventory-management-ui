interface IService<T> {
    save(object: T): Promise<T>;
    update(id: number, object: T): Promise<T>;
    getById(id: number): Promise< | null>;
    getPage(pageNumber: number, pageSize: number, filter: string): Promise<T[]>;
}