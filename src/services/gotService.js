export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Ошибка по ${url}, статус: ${res.status}`);
    }
    return await res.json();
  }
  async getAllCharacters() {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter)
  }
  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character)
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born || "no data :(",
      died: char.died || "no data :(",
      culture: char.culture || "no data :(",
    };
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    }
  }
}
