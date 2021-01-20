import { TaJson } from 'ta-json'
import { GroupItem } from '~/models'

export class GroupConverter {
  public deserialize(value: Record<string, GroupItem>) {
    return Object.fromEntries(
      Object.entries(value).map(([key, el]) => {
        return [parseInt(key), TaJson.deserialize(el, GroupItem)]
      })
    )
  }
}
