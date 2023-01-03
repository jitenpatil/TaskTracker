import { createRoot } from 'react-dom/client';
import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';


const App = () => {

    return( 
        <div style={{display:'flex'}}>
            <LeftPane/>
            <RightPane/>
        </div>
    );
}



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('app'));