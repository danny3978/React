import logo from './logo.svg';
import './App.css';

//컴포넌트 component
//속성 == prop
// {} 표현식으로 해당 props의 내용이 들어간다.
function Header(props){
  return <header>
  <h1><a href='/'>{props.title}</a></h1>
</header>
}

function Nav(props){

  const lis = [];

  for (let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read'+t.id}>{t.title}</a></li>)
  };
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}


function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'js', body:'js is ...'},
    {id:3, title:'css', body:'css is ...'}
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics = {topics}></Nav>    
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
