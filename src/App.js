import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        //
        try {


            //무조건 1순위로 실행됨
            //async - await : 한세트로 동작 ( async가 있으면 await가 있어야함) 비동기, 너무 빠르니 한템포 쉬어가자는 뜻
            const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f"
            const result = await axios.get(address)
            console.log("++++++++++++++++++++++++++++++", result.data.articles)

            setArticles(result.data.articles)


        } catch (err) {
            // try에서 에러 발생되면 catch로 실행됨.
            // err은 모든 에러에 대한 상수로 표현
            console.log("----------------------", err.message)

        }
    }

    return (
        <div>
            <h1>{articles.length}</h1>
            {articles && articles.map(article => (
                <div>
                    <h1>{article.title}</h1>
                    <h3>{article.content}</h3>
                </div>
            ))}
            <button onClick={getArticles}>기사 가져오기</button>
        </div>
    );
};

export default App;