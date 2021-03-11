import './App.css';
import {  
  useQuery,
  gql
} from '@apollo/client';



const hello = gql`
  {
    books {
      name
      author
      price
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(hello)

  console.log(data,loading,error);
  return (
      <div className="App">
        Hello World
      </div>
  );
}

export default App;
