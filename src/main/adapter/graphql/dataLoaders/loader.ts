export interface Loader<K, T> {
  get(key: K): Promise<T | null>;
}

export default interface LoaderFactory<K, T> {
  create(): Loader<K, T>
}
