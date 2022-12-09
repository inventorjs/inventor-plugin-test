/**
 * action 入口
 * @author: developer
 */
import { Action } from '@inventorjs/cli-core'

export default class extends Action {
  description = 'a test plugin'
  options = []
  async action() {
    this.log.success('测试插件调用成功')
  }
}
