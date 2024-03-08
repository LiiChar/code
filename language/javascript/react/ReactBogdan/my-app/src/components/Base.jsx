import React from 'react'
import Header from './Header';
import Main from './MainOll/Main';
import Navigation from './Main/Navigation/Navigation';
import '../index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message1 from './Message/Message1';


function Base({store}) {
    return ( 
        <BrowserRouter> 
            <div className='AllMain'> 
                <Header />
                <Navigation />
                <div>
                    <Routes> 
                        <Route path='/Profile' element={<Main post={store.getState()} act={store} />}></Route>
                        <Route path='/Message' element={<Message1 
                        dia={store.getState().dialogsDate.dialogsDate.dialogi} 
                        mes={store.getState().messages.messages.message} 
                        newMesText={store.getState().messages.messages.newMessage} 
                        act={store}/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Base