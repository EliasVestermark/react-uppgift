import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {

    const [articleList, setArticleList] = useState([])
    const [articleShortList, setArticleShortList] = useState([])
    const [article, setArticle] = useState(null)
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

    useEffect(() => {
        getArticles()
        getThreeArticles()
        setArticle()
    }, [])

    async function getArticles() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
            const data = await result.json()
            
            setArticleList(data)
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
        <ArticleContext.Provider value={{months, articleList, articleShortList, article, getNewsById, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}