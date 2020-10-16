import HttpRequest from './http.request'

export interface StarwarsInterface {
  getHero(path: string): Promise<any>;
}

class StarwarsProvider extends HttpRequest implements StarwarsInterface {
  public async getHero (path: string) {
    return await this.fetch(path, {})
  }
}

export default StarwarsProvider
