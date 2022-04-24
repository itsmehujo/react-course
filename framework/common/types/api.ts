export type ApiFetcherOptions = {
  apiUrl: string,
  query: string
}

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string

  fetch<T>( options: ApiFetcherOptions ): Promise<ApiFetcherResults<T>>
}