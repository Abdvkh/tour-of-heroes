export interface Hero {
    id: number;
    name: string;
}

export class HeroModel {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }

}
