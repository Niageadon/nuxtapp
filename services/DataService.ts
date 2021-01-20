import { TaJson } from 'ta-json'
import { Goods } from '@/models'
import { GroupService } from '~/services/index'
const goodsData = require('@/assets/data.json')

class GoodsResponse {
  Error: string
  Id: number
  Success: boolean
  Value: { Goods: Goods[] }
  constructor(resp: Record<string, any>) {
    this.Error = resp?.Error
    this.Id = resp?.Id
    this.Success = resp?.Success
    this.Value = {
      Goods: TaJson.deserialize<Goods[]>(resp?.Value.Goods, Goods),
    }
  }
}
class DataService {
  getAll(): Goods[] {
    const resp: GoodsResponse = new GoodsResponse(goodsData)
    const groupMap = GroupService.getAll()
    return resp.Value.Goods.map((el) => {
      // Мапим имена товаров из групп
      if (el.groupId.toString() in groupMap) {
        const groupItemList = groupMap[el.groupId.toString()].itemList ?? {}
        if (el.id.toString() in groupItemList) {
          el.name = groupItemList[el.id.toString()].name
        }
      }
      return el
    })
  }
}
export default new DataService()
