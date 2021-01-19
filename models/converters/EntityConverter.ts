import { IPropertyConverter, TaJson } from 'ta-json'

export class EntityConverter<T> implements IPropertyConverter {
  private ctor: Function
  constructor(ctor: Function) {
    this.ctor = ctor
  }
  serialize(property: T): string {
    return TaJson.serialize(property)
  }
  deserialize(value: unknown): T {
    return TaJson.deserialize(value, this.ctor)
  }
}
