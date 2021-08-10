export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Ошибка по ${url}, статус: ${res.status}`);
    }
    return await res.json();
  }

  getAllCharacters = async () => {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter)
  }

  getAllHouses = async () => {
    const res = await this.getResource("/houses/");
    return res.map(this._transformHouse)
  }

  getAllBooks = async () => {
    const res = await this.getResource("/books/");
    return res.map(this._transformBook)
  }

  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character)
  }

  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book)
  }

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house)
  }

  _transformCharacter(char, i) {
    return {
      name: char.name || "no data :(",
      gender: char.gender || "no data :(",
      born: char.born || "no data :(",
      died: char.died || "no data :(",
      culture: char.culture || "no data :(",
      id: i
    };
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
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
