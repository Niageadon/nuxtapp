import { JsonType, JsonProperty, JsonObject } from 'ta-json'

@JsonObject()
export class Goods {
  @JsonProperty('T')
  @JsonType(Number)
  id: number

  @JsonProperty('C')
  @JsonType(Number)
  priceInUsd: number

  @JsonProperty('G')
  @JsonType(Number)
  groupId: number

  @JsonProperty('P')
  @JsonType(Number)
  inStock: number

  count: number = 1
  groupName?: string
  name?: string
  B: boolean
  CV: any
  Pl: any

  constructor() {
    this.count = 1
  }
}
