export default class gotService {

    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    async getResource(url)  {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    async  getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`)
        return res.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}/`)
        return this._transformCharacter(character);
    }

    async  getAllHouse() {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouse)
    }

    async getAllBooks() {
        const res = await this.getResource(`/books/`)
        return res.map(this._tranformBook)
    }

    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`)
        return this._tranformBook(book);
    }

    _transformCharacter(char){
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestraWeapons: house.ancestraWeapons
        }
    }

    _tranformBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

}

