export class Connector {
  private _id: string;
  private _from: string;
  private _to: string;
  private _weight: string;
  private _points: number[];

  constructor(id: string, from: string, to: string, weight: string, points: number[]) {
    this._id = id;
    this._from = from;
    this._to = to;
    this._weight = weight;
    this._points = points;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get weight(): string {
    return this._weight;
  }

  set weight(value: string) {
    this._weight = value;
  }

  get points(): number[] {
    return this._points;
  }

  set points(value: number[]) {
    this._points = value;
  }
}
