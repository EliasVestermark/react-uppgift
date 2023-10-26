import React from 'react'
import './News.css'

import SectionTitle from '../Generics/SectionTitle'
import img_article from '../../assets/images/KimberlyHansen.png'

const NewsSection = () => {
  return (
    <section>
        <div className="container">
            <div>
                <SectionTitle title="" description="How To Use Digitalization In The Classroom"/>
                <p className="article-info">Mar 25, 2023<span className="dot"/>Business<span className="dot"/>Kimberly Hansen</p>
            </div>
            <div className="body">
                <div className="left">
                    <img src={img_article}/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/><br/> Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br/><br/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br/><br/>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                    <p className="quote">
                        <div><i class="fa-sharp fa-solid fa-quote-right fa-flip-horizontal"></i></div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div className="tags">

                    </div>
                </div>
                <div className="right">
                    <div className="searchbar">
                        
                    </div>
                    <div className="recent-posts">
                        <h3>Recent Posts</h3>
                    </div>
                    <div className="categories">
                        <h3>Categories</h3>

                    </div>
                </div>
                
            </div>

        </div>

    </section>
  )
}

export default NewsSection