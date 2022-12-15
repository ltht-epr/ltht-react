const makeZIndexes = (layers: string[]): Record<string, number> =>
  layers.reduce((agg: Record<string, number>, layerName: string, index: number) => {
    agg[layerName] = (index + 1) * 100
    return agg
  }, {})

export const StickyTableData = 'stickyTableData'
export const StickyTableHead = 'stickyTableHead'
export const TableDataWithPopUp = 'tableDataWithPopUp'
export const Tooltip = 'tooltip'
export const PopUp = 'popup'

// the order of the array determines the zIndex value and thus visibility order in the dom
const zIndexes = [StickyTableData, TableDataWithPopUp, StickyTableHead, Tooltip, PopUp]

const zIndexProps = makeZIndexes(zIndexes)

export type ZIndexes = 'stickyTableData' | 'tableDataWithPopUp' | 'stickyTableHead' | 'tooltip' | 'popup'

export const getZIndex = (zIndex: ZIndexes) => zIndexProps[zIndex]
