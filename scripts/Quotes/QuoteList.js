import { useQuote } from './QuoteuseQuoteDataProvider.js'
import { Quote } from './QuoteList.js'

export const QuoteList = () => {
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {
        locationHTMLRepresentations += Quote(quote)
    }

    contentElement.innerHTML += `
        <article class="quoteList>
            ${quoteHTMLRepresentations}
        </article>
        `
}