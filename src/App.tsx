import { Route, Routes } from "react-router-dom"
import TOP from "./top"
import MISSION from "./mission"
import MISSION2 from "./mission2"
import INFORMATION from "./information"
import DIAGNOSIS from "./diagnosis"
import MYPAGE from "./mypage"
import VIRTUAL from "./virtual"
import VIRTUAL2 from "./virtual2"

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<TOP />}/>
            <Route path="/mission" element={<MISSION />} />
            <Route path="/mission2" element={<MISSION2 />} />
            <Route path="/information" element={<INFORMATION />} />
            <Route path="/virtual" element={<VIRTUAL />} />
            <Route path="/virtual2" element={<VIRTUAL2 />} />
            <Route path="/diagnosis" element={<DIAGNOSIS />} />
            <Route path="/mypage" element={<MYPAGE />} />
        </Routes>
        </>
    )
}

export default App