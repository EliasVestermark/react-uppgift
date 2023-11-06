import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {

    const [articleList, setArticleList] = useState([])
    const [articleShortList, setArticleShortList] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticles()
        getThreeArticles()
        setArticle()
    }, [])

    function formatDates(articles) {
        const months = [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
        ]

        for (let item of articles) {
            let month = item.published.toString().slice(5, 7)
            let monthFormated = months[month]

            item.day = item.published.toString().slice(8, 10)
            item.month = monthFormated
        }
    }

    function formatDate(article) {
        const months = [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
        ]

        let month = article.published.toString().slice(5, 7)
        let monthFormated = months[month]

        article.day = article.published.toString().slice(8, 10)
        article.year = article.published.toString().slice(0, 4)
        article.month = monthFormated
    }

    async function getArticles() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
            const data = await result.json()
            
            setArticleList(data)
            formatDates(data)
        }
        catch (error) {
            console.warn(error)
        }
    }

    async function getThreeArticles() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles?take=3")
            const data = await result.json()
            
            setArticleShortList(data)
            formatDates(data)
        }
        catch (error) {
            console.warn(error)
        }
    }

    async function getNewsById(id) {
        try {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            const data = await result.json()

            if (result.status === 200) {
                formatDate(data)
                setArticle(data)
            }
        }
        catch(error) {
            console.warn(error)
        }
    }

    function clearArticle() {
        setArticle(null)
    }


    return (
        <ArticleContext.Provider value={{articleList, articleShortList, article, getNewsById, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}