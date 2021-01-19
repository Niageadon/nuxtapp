import { TaJson } from 'ta-json'
import { Goods } from '@/models'
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
export class DataService {
  getAll(): Goods[] {
    return new GoodsResponse(goodsData).Value.Goods ?? []
  }
}
