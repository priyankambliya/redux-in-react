import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import router from "./routes/routes"
import AuthVerify from "./auth/AuthVerify"
// import RouteVerify from "./auth/RouteVerify"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map(({ path, component: Comp, auth }, index) => {
            return auth == true ? (
              <>
                <Route key={index} path={path} element={<AuthVerify />}>
                  <Route path={path} element={<Comp />} />
                </Route>
              </>
            ) 
            // : auth == false ? (
            //   <Route key={index} path={path} element={<RouteVerify />}>
            //     <Route path={path} element={<Comp />} />
            //   </Route>
            // ) :
            : (
              <Route key={index} path={path} element={<Comp />} />
            )
          })
        }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
