import { Selector } from 'testcafe' // first import testcafe selectors

const TEST_NAME = 'ui/molecules/menu/default-action-menu'
const URL = 'http://localhost:9009/?path=/story/ui-molecules-menu--default-action-menu'

fixture`${TEST_NAME}`.page`${URL}`

test('when button is clicked popup menu div appears', async (t) => {
  const root = Selector('#root')
  const button = root.find('button')
  await t.click(button)

  const div = button.parent().find('div')
  await t.expect(div.visible).ok()
})
