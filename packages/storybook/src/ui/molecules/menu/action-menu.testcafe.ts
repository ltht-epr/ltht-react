import { Selector } from 'testcafe' // first import testcafe selectors

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:9009'

const TEST_NAME = 'ui/molecules/menu/default-action-menu'
const URL = `${BASE_URL}/?path=/story/ui-molecules-menu--default-action-menu`

fixture`${TEST_NAME}`.page`${URL}`

/*  StoryBook renders components in an iframe in order to interact with those with testcafe selectors. 
    We need to switch the context to that iframe, therefore all the selector work with the iframe document
    rather than the main one
*/
const switchToStoryBookComponentIFrame = (t: TestController) => {
  const iframe = Selector('#storybook-preview-wrapper').child('iframe')
  return t.switchToIframe(iframe)
}

test('when button is clicked popup menu div appears', async (t) => {
  await switchToStoryBookComponentIFrame(t)

  const root = Selector('#root')
  const button = root.find('button')
  await t.click(button)

  const div = button.parent().find('div')
  await t.expect(div.visible).ok()
})

test('test all the action menu links', async (t) => {
  await switchToStoryBookComponentIFrame(t)

  const root = Selector('#root')
  const button = root.find('button')
  await t.click(button)

  const div = button.parent().find('div')

  await t.expect(div.visible).ok()

  const actionButtons = div.find('ul li')

  await t.click(actionButtons.nth(0)) // view
  await t.click(button)
  await t.click(actionButtons.nth(1)) // edit
  await t.click(button)
  await t.click(actionButtons.nth(2)) // delete

  const consoleLogMessages = await (await t.getBrowserConsoleMessages()).log

  await t.expect(consoleLogMessages).contains('View was clicked')
  await t.expect(consoleLogMessages).contains('Edit was clicked')
  await t.expect(consoleLogMessages).contains('Delete was clicked')
})
