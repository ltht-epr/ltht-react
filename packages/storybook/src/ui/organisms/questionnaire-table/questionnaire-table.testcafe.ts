import { Selector } from 'testcafe' // first import testcafe selectors

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:9010'

const TEST_NAME = 'ui/organisms/questionnaire-table/vertical-table-with-admin-actions'

fixture`${TEST_NAME}`

/*  StoryBook renders components in an iframe in order to interact with those with testcafe selectors. 
    We need to switch the context to that iframe, therefore all the selector work with the iframe document
    rather than the main one
*/
const switchToStoryBookComponentIFrame = (t: TestController) => {
  const iframe = Selector('#storybook-preview-wrapper').child('iframe')
  return t.switchToIframe(iframe)
}

test('Test actions menu on vertical table', async (t) => {
  await t.navigateTo(`${BASE_URL}/?path=/story/ui-organisms-questionnairetable--vertical-table-with-admin-actions`)

  await switchToStoryBookComponentIFrame(t)

  const table = Selector('#root').child('div').child('table')
  const actionButtons = table.child('tbody').find('tr').nth(0).find('td div div button')

  await t.click(actionButtons.nth(0))
  await t.expect(actionButtons.nth(0).parent().child('div').visible).ok()

  await t.click(actionButtons.nth(1))
  await t.expect(actionButtons.nth(1).parent().child('div').visible).ok()

  await t.click(actionButtons.nth(2))
  await t.expect(actionButtons.nth(2).parent().child('div').visible).ok()
})
