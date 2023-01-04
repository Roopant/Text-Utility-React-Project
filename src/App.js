
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'


function App() {
  return (
<>
<Navbar title="Text Utility" />
<div className="container my-5">
<Textform heading="Enter your text below to analyze"/>
</div>
</>
  )
}
export default App;
