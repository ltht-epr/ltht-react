import { Selector } from 'testcafe' // first import testcafe selectors

const TEST_NAME = 'ui/molecules/table/table-with-pagination'
const URL = 'http://localhost:9009/?path=/story/ui-molecules-table--table-with-pagination'

fixture`${TEST_NAME}`.page`${URL}`

test('test', async (t) => {
  const root = Selector('#root')
  const table = root.find('table')
  const button = root.find('button')
  const rowCountBefore = await table.find('tr').count
  await t.click(button)
  const rowCountAfter = await table.find('tr').count

  await t.expect(rowCountAfter).gt(rowCountBefore)
})
