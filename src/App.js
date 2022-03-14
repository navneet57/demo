import './app.css'

// import GithubUser from './useEffect-GetHub-user/GithubUser';

// import MultipleReturn from './UseEffect-Multiple-Return/MultipleReturn';
// import ShowHide from './Show-And-Hide-Example/ShowHide';
// import Menu from './Menu-Example/Menu';
// import ControlledInput from './Controlled-Input-Example/ControlledInput'
// import MultipleInput from './Multiple-Input-Controls/MultipleInput'
// import UseRefBasic from './useRef-basics/UseRefBasic'
// import UseReducer from './useReducer/UseReducer'
// import PropDrilling from './Prop-Drilling/PropDrilling'
// import ContextAPI from './UseContaxt/ContextAPI'
// import CustomHooks from './Custom-Hooks/CustomHooks'
// import RouterBasic from './React-Router/RouterBasic'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './z-all-projects/Home'
import Data from './z-all-projects/Data'

function App() {
  return (
    <div className='app'>
      {/* <Projects/>   */}
      {/* <GithubUser/> */}
      {/* <MultipleReturn/> */}
      {/* <ShowHide/> */}
      {/* <Menu /> */}
      {/* <ControlledInput /> */}
      {/* <MultipleInput /> */}
      {/* <UseRefBasic /> */}
      {/* <UseReducer /> */}
      {/* <PropDrilling /> */}
      {/* <ContextAPI /> */}
      {/* <CustomHooks /> */}
      {/* <RouterBasic /> */}
      <Router>
        <Routes>
          <Route path='/react-practice-projects' element={<Home />} />
          {Data.map((item) => {
            const { id, page, path } = item
            return <Route key={id} path={path} element={page} />
          })}
          <Route
            path='*'
            element={
              <main className='items'>
                <h3>There's nothing here!</h3>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
