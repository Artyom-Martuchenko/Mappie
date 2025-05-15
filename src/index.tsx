import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import {App} from './components/App/App';
import { SearchBar } from "components/SearchBar/SearchBar";
import { SavedBar } from "components/SavedBar/SavedBar";
import { BigCard } from "components/BigCard/BigCard";
import { Provider } from "react-redux";
import rootReducer from "./store/index" ;

const root = document.getElementById('root')

if(!root){
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(
    <Provider store={rootReducer}>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}/>
                {/* <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    </Route> */}
            </Routes>
        </BrowserRouter>
    </Provider>
)