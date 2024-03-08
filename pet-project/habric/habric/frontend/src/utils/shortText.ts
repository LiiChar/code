export default function shortText(text: string): string {
    return text.slice(0, text.length > 500 ? text.slice(0, 500).lastIndexOf('.') + 1 : 500)
}