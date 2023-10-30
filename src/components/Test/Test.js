import React from 'react'
import { useState, useEffect} from 'react'
import TestImage from './TestImage'

const Test = () => {

    const [articleList, setArticles] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    async function getNews() {
        try {
            const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
            setArticles(await result.json())
            
        }
        catch (error) {
            console.warn(error)
        }
    }

   let imageArray = []
   
    for (let image of articleList) {
        imageArray.push(image.imageUrl)
    }

    console.log(imageArray)

    let imageUrl = imageArray[0]

    console.log(imageUrl)


  return (
    <>
        <TestImage imageUrl={imageUrl}/>
    </>
  )
}

export default Test