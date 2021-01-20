import { JsonType, JsonProperty, JsonObject, JsonConverter } from 'ta-json'
import { GroupConverter } from '@/models/converters'

@JsonObject()
export class GroupItem {
  @JsonProperty('N')
  @JsonType(String)
  name?: string
}

@JsonObject()
export class Group {
  @JsonProperty('G')
  @JsonType(String)
  name?: string

  @JsonProperty('B')
  @JsonType(Array)
  // @ts-ignore
  @JsonConverter(GroupConverter)
  itemList?: Record<string, GroupItem>
}
