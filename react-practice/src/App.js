import './App.css';

// 사용자 정의 태그 만드는 법 : 함수 만든다.
function Header(props) { // props = {title: "REACT!!"}
  console.log(props);
  return ( // 괄호로 감싸서 return 해야된다.
    <header>
          <h1><a href="/">{props.title}</a></h1>
    </header>
)
}

function Nav() {
  return (
      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
          <li>
            <a href="/read/3">js</a>
          </li>
        </ol>
       </nav>
  )
}
function Article(props) {
  return (
      <article>
      <h2>{props.title}</h2>
        {props.content}
      </article>
  )
}

function App() {
  return (
    <div>
      <Header title="REACT!!"></Header>
      <Header title="hello!"></Header>
      <Header title="me likey!!!!!"></Header>
      <Nav></Nav>
      <Article title="article's title." content={"article's content."}></Article>
    </div>
  );
}

export default App;
