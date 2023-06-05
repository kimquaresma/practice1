// import React, {useState} from 'react';
// import axios from "axios";
//
// const App = () => {
//     //1.데이터 담을 그릇 설정하기.
//     const [articles, setArticles] = useState([])
//
//     //2.데이터 가져오는 함수
//     const getArticles = async () => {
//         try {
//             //5. 네트워킹
//             const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f"
//             const alldata = await axios.get(address)
//             console.log("++++++", alldata.data.articles)
//             setArticles(alldata.data.articles)
//         } catch (err) {
//             //3. 에러 핸들링 하기.
//             console.log("err", err.message)
//         }
//     }
//
//     return (
//         <div>
//             {/*4. 데이터 display 데이터 잘들어왔는지 확인하기 위함.*/}
//             <h1>{articles.length}</h1>
//             {/*6. 데이터 display(4번보다 상세한것)*/}
//             {articles && articles.map(article => (
//                 <div>
//                     <h1>{article.title}</h1>
//                     <h3>{article.description}</h3>
//                     <h4>{article.publishedAt}</h4>
//                 </div>
//             ))}
//             <button onClick={getArticles}>데이터 가져오기</button>
//         </div>
//     );
// };
//
// export default App;

import React, {useState} from 'react';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";

const App = () => {
    //1.데이터 담을 그릇 설정하기.
    const [sentences, setSentences]= useState([])
    //2.데이터 가져오는함수.
    const getSentences = async () => {
        try {
            // 5. 네트워킹 핸들링 하기
            const address = "https://jsonplaceholder.typicode.com/posts"
            // 6. axios에 option+enter 눌러서 axios import 하기
            const result = await axios.get(address)
            // 7. result 데이터 추출 후 localhost 확인.
            console.log("+++++++++", result.data)
            // 8. result의 data Sentences에 setSentences라는 것으로 데이터 넣기.
            setSentences(result.data)
        } catch (err) {
            //3. 에러 핸들링 하기.
            console.log("err", err.message)
        }
    }
    return (
        <Container>
            {/*4. 데이터 display*/}
            <Row>

            <h1>{sentences.length}</h1>
            {/*9. 1~100까지 자료 출력하기*/}
            {sentences && sentences.map(sentence => (
                <Col className={"mt-5"}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{sentence.title.slice(0,50)}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            {sentence.body.slice(0,110)}
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Col>
            ))}
            <button onClick={getSentences}>기사 가져오기</button>
            </Row>

        </Container>
    );
};

export default App;