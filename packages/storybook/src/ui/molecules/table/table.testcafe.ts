import { Selector } from 'testcafe' // first import testcafe selectors

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:9010'

const TEST_NAME = 'ui/molecules/table/table-with-pagination'
const URL = `${BASE_URL}/?path=/story/ui-molecules-table--table-with-pagination`

fixture`${TEST_NAME}`.page`${URL}`

/*  StoryBook renders components in an iframe in order to interact with those with testcafe selectors. 
    We need to switch the context to that iframe, therefore all the selector work with the iframe document
    rather than the main one
*/
const switchToStoryBookComponentIFrame = (t: TestController) => {
  const iframe = Selector('#storybook-preview-wrapper').child('iframe')
  return t.switchToIframe(iframe)
}

test('when next button clicked more data is loaded into the table', async (t) => {
  await switchToStoryBookComponentIFrame(t)

  const scrollableContainer = Selector('#root').child('div').child('div')
  const button = scrollableContainer.child('div').child('svg')
  const scrollHeightBefore = await scrollableContainer.scrollHeight

  await t.click(button).takeScreenshot()

  await t.expect(scrollableContainer.scrollHeight).gt(scrollHeightBefore)
})

test('scroll to end of table retrieves more data', async (t) => {
  await switchToStoryBookComponentIFrame(t)

  const scrollableContainer = Selector('#root').child('div').child('div')
  const button = scrollableContainer.child('div').child('svg')
  let scrollHeightBefore = await scrollableContainer.scrollHeight

  await t.click(button).takeScreenshot()

  await t.expect(scrollableContainer.scrollHeight).gt(scrollHeightBefore)

  scrollHeightBefore = await scrollableContainer.scrollHeight

  await t.click(scrollableContainer).scroll(scrollableContainer, 0, 1000).takeScreenshot()

  await t.expect(scrollableContainer.scrollHeight).gt(scrollHeightBefore)
  scrollHeightBefore = await scrollableContainer.scrollHeight

  await t.click(scrollableContainer).scroll(scrollableContainer, 0, 2000).takeScreenshot()

  await t.expect(scrollableContainer.scrollHeight).gt(scrollHeightBefore)
})
