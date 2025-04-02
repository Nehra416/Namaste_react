import './App.css'
import UseMemoHook from './components/UseMemoHook'
import UseRefHook from './components/UseRefHook'

function App() {

  return (
    <div className='flex gap-5'>
      <UseMemoHook />
      <UseRefHook />
    </div >
  )
}

export default App
