import {useState, useEffect} from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
function QuoteFetcher(){
    const [quote, setQuote] = useState({text: "", author: ""});
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const res = await fetch(RANDOM_QUOTE_URL);
    //         const jsonRes = await res.json();
    //         const randomQuote = jsonRes.quote;
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();
    // }, []);

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        setQuote({text: "", author: ""});
        setIsLoading(true);

        const res = await fetch(RANDOM_QUOTE_URL);
        const jsonRes = await res.json();
        const randomQuote = jsonRes.quote;

        setQuote(randomQuote);
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            <p>{quote.text}</p>
            <p>- {quote.author}</p>
            <button onClick={fetchQuote}>Get Random Quote</button>
        </div>
    )
}

export default QuoteFetcher