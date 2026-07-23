import './App.css';
import {useState} from 'react'; // useState는 react에서 기본적으로 제공하는 Hook이다.

function Article(props) {
    return (
        <article>
            <h2>
                {props.title}
            </h2>
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
                   onClick={event => { // 리액트는 이벤트발생 시 콜백함수한테 첫번째인자로 event 객체를 넘긴다.
                    event.preventDefault();
                    props.onChangeMode(Number(event.target.id)); // target : 이벤트를 유발시킨 태그 <a>
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

function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const title = event.target.title.value; // name이 title인 tag(input)의 value
                const body = event.target.body.value;
                props.onCreate(title, body );
            }}>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create"/></p>
            </form>
        </article>);
}

function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const title = event.target.title.value; // name이 title인 tag(input)의 value
                const body = event.target.body.value;
                props.onUpdate(title, body);
            }}>
                <p><input type="text" name="title" value={title} onChange={
                    event => {
                        setTitle(event.target.value);
                    }
                } placeholder="title"/></p>
                <p><textarea name="body" value={body} onChange={
                    event => {
                        setBody(event.target.value);
                    }
                } placeholder="body"></textarea></p>
                <p><input type="submit" value="Update"/></p>
            </form>
        </article>);
}

function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState([
        {id: 0, title: 'html', body: 'html is...'},
        {id: 1, title: 'css', body: 'css is...'},
        {id: 2, title: 'js', body: 'js is...'},
    ]);

    let content = null;
    let contextControl = null; // 맥락에따라 노출되는 컨텐츠

    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB"></Article>;
    } else if (mode === "READ") {
        let title, body = null;

        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>;
        contextControl =
            <>
                <li>
                    <a href={'/update/' + id} onClick={event => {
                        event.preventDefault();
                        setMode('UPDATE');
                    }}>
                        Update
                    </a>
                </li>
                <li>
                     <input type="button" value="Delete" onClick={() => {
                        const newTopics = []
                        for (let i = 0; i < topics.length; i++) {
                            if (topics[i].id !== id) {
                                newTopics.push(topics[i]);
                            }
                        }
                        setTopics(newTopics);
                        setMode('WELCOME');
                    }
                    }
                    />
                </li>
            </>;
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body};
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>
    } else if (mode=== 'UPDATE') {
        let title, body = null;

        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }

        content=
            <Update title={title} body={body} onUpdate={(title, body) => {
                    const newTopics = [...topics];
                    const updatedTopic = {id: id, title: title, body: body};
                    for (let i= 0; i<newTopics.length; i++) {
                        if (newTopics[i].id === id) {
                            newTopics[i] = updatedTopic;
                            break;
                        }
                    }
                    setTopics(newTopics);
                    setMode('READ');
                }}>
            </Update>;
    }

    return (
        <div>
            <Header title="REACT!!" onChangeMode={() => {
                setMode('WELCOME');
            }}>
            </Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                // mode='READ';
                setMode('READ');
                setId(_id);
            }}>
            </Nav>
            {content}
            <ul>
                <li>
                    <a href="/create" onClick={(e) => {
                        e.preventDefault();
                        setMode('CREATE');
                    }}>
                        Create
                    </a>
                </li>
                {contextControl}
            </ul>
        </div>
    );
}

export default App;
