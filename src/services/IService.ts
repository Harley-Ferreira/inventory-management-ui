interface IService<T> {
    save(object: T): Promise<T>;
    update(id: number, object: T): Promise<T>;
    getById(id: number): Promise<T>;
    getPage(pageNumber: number, pageSize: number, filter: string): Promise<T[]>;
    delete(id: number): Promise<void>;
}