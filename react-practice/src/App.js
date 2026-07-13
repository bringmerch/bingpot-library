import './App.css';
import {useState} from 'react'; // useState는 react에서 기본적으로 제공하는 Hook이다.



function Article(props) {
  return (
      <article>
      <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}


// 사용자 정의 태그 만드는 법 : 함수 만든다.
function Header(props) { // props = {title: "REACT!!"}
    console.log(props);
    return ( // 태그리턴 : 괄호로 감싸서 return 해야된다.
        <header>
            <h1><a href="/" onClick={(event) =>  {
                event.preventDefault();
                props.onChangeMode(); // onChangeMode로 넘긴 함수 실행
            }}>{props.title}</a></h1> {/* 기본 html이 아니다. onClick <- 주목 */}

        </header>
    )
}

function Nav(props) {
    const lis = [
    ]

    for (let i=0; i<props.topics.length; i++) {
        let t= props.topics[i];
        lis.push(
            <li key={t.id}>
                <a href={'/read/' + t.id}
                   id={t.id}
                   onClick={event => {
                    event.preventDefault();
                    props.onChangeMode(event.target.id); // target : 이벤트를 유발시킨 태그 <a>
                   }}>
                    {t.title}
                </a>
            </li>
        );
    }

    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
}

function App() {
    const mode = 'WELCOME';
    // ㄴ 얘가 바뀔 때 App()이 한번더실행되면서 태그가 바뀌는 걸 하고 싶다 -> useState 사용
    const topics = [
          {id: 1, title: 'html', body:'html is...'},
          {id: 2, title: 'css', body:'css is...'},
          {id: 3, title: 'js', body:'js is...'},
      ];

    let content = null;

    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB"></Article>;
    } else if (mode === "READ") {
        content = <Article title="Read" body="Hello, Reader"></Article>;
    }

    return (
      <div>
        <Header title="REACT!!" onChangeMode={()=> {
            // mode = 'WELCOME'; -> 일케하면 안되는이유 : App 함수는 변하지 않기 때문에 Return 값에는 변화가 없다.
        }}></Header>
        <Nav topics={topics} onChangeMode={() => {
            mode='READ';
        }}></Nav>  {/* 표현식: 중괄호로 표현 */}
          {content}
      </div>
    );
}

export default App;
