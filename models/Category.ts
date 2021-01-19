import { JsonType, JsonProperty, JsonObject, JsonConverter } from 'ta-json'
import { EntityConverter } from '@/models/converters'

@JsonObject()
export class CategoryItem {
  @JsonProperty('N')
  @JsonType(String)
  name?: string
}

@JsonObject()
export class Category {
  @JsonProperty('G')
  @JsonType(String)
  name?: string

  @JsonProperty('B')
  @JsonType(Array)
  @JsonConverter(new EntityConverter<CategoryItem>(CategoryItem))
  itemList?: CategoryItem[]
}
