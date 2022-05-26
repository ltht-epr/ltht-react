const stripBBTags = (value?: string | null): string => (value ?? '').replace(/(\[([^\]]+)\])/gi, '')

export default stripBBTags
