import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    //1.데이터 담을 그릇 설정하기.
    const [articles, setArticles] = useState([])

    //2.데이터 가져오는 함수
    const getArticles = async () => {
        try {
            //5. 네트워킹
            const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f"
            const alldata = await axios.get(address)
            console.log("++++++", alldata.data.articles)
            setArticles(alldata.data.articles)
        } catch (err) {
            //3. 에러 핸들링 하기.
            console.log("err", err.message)
        }
    }

    return (
        <div>
            {/*4. 데이터 display*/}
            <h1>{articles.length}</h1>
            {articles && articles.map(article => (
                <div>
                    <h1>{article.title}</h1>
                    <h3>{article.description}</h3>
                    <h4>{article.publishedAt}</h4>
                </div>
            ))}
            <button onClick={getArticles}>데이터 가져오기</button>
        </div>
    );
};

export default App;