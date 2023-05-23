export class PersonInfo {
  constructor(
    public count: number,
    public next: string,
    public previous: string | null,
    public results: Person[] | null | undefined
  ) {}
}

export class Person {
  constructor(
    public birth_year: string,
    public created: string,
    public edited: string,
    public eye_color: string,
    public films: string[],
    public gender: string,
    public hair_color: string,
    public height: string,
    public homeworld: string,
    public mass: string,
    public name: string,
    public skin_color: string,
    public species: string[],
    public starships: string[],
    public url: string,
    public vehicles:string[],
  ){}
}

