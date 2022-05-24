const stripHtmlTags = (value?: string | null): string => (value ?? '').replace(/(<([^>]+)>)/gi, '')

export default stripHtmlTags
