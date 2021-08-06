export default class GotService{
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }
  async getResoutce(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Ошибка по ${url}, статус: ${res.status}`)
    }
    return await res.json()
  };
  getAllCharacters(){
    return this.getResoutce('/characters?page=5&pageSize=10')
  }
  getCharacter(id){
    return this.getResoutce(`/characters/${id}`)
  }
}
