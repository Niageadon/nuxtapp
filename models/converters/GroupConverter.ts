import { TaJson } from 'ta-json'
import { GroupItem } from '~/models'

export class GroupConverter {
  public deserialize(value: Record<string, GroupItem>): any {
    return Object.fromEntries(
      Object.entries(value).map(([key, el]) => {
        return [key, TaJson.deserialize(el, GroupItem)]
      })
    )
  }
}
