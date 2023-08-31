import logo from './logo.svg';
import './App.css';
import 'rapidoc';


function App() {
  return (
    <rapi-doc
      spec-url = "./docs.json"
      render-style = "read"
      style = {{ height: "100vh", width: "100%" }}
    >
    </rapi-doc>
  );
}

export default App;
