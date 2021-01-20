import { Group } from '@/models'
import { TaJson } from 'ta-json'
const groupList = require('@/assets/names.json')

class GroupService {
  getAll(): Record<string, Group> {
    return Object.fromEntries(
      Object.entries(groupList).map(([key, el]) => {
        return [key, TaJson.deserialize<Group>(el, Group)]
      })
    )
  }

  get(groupId: number): Group {
    return groupList[groupId]
  }
}
export default new GroupService()
