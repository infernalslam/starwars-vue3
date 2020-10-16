import axios from 'axios'

interface HttpRequestInterface {
  fetch(endPoint: string, data: object): Promise<any>;
}

class HttpRequest implements HttpRequestInterface {
  public axios: any
  private http: any

  constructor (url: string = 'https://swapi.dev/api/' || '') {
    this.axios = axios
    this.http = axios.create({
      baseURL: url,
      timeout: 120000
    })

    this.http.interceptors.request.use((request: any): Promise<any> => {
      return request
    }, (error: any) => {
      return Promise.reject(error)
    })

    this.http.interceptors.response.use((response: any): Promise<any> => {
      const responseData: object = {
        data: response.data,
        code: response.status
      }
      return Promise.resolve(responseData)
    }, (error: any) => {
      const status: number = error.response && error.response.status
      const response: object = {
        message: error,
        errorCode: status,
        errorMessage: error,
        code: status
      }
      return Promise.reject(response)
    })
  }

  public fetch (endPoint: string, data: object): Promise<any> {
    return this.http.get(endPoint, { params: data })
  }
}

export default HttpRequest
