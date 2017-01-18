/**
 * Created by likon on 2016/8/3.
 */
import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store=createStore(todoApp)

// let rootElement=document.getElementById('root')

let com = document.createElement("div")
document.body.appendChild(com)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    com
)

// import {createAction,createReducer} from 'redux-act'
// import {createStore,applyMiddleware} from 'redux'
// import {createlogger} from 'redux-logger'
//
// //定义action,用
// const addTodo=createAction("add_Todo",(title,context)=>({ title,context}));
// const todoCompleted=createAction();
//
// //创建reducer
// const reducer=createReducer({
//         [addTodo]:(state,text)=>[...state,{text:text,completed:false}]
//         ,
//         [todoCompleted]:(state,index)=>state.map((t,i)=>i===index ? {...t,completed:true}:t)
//     },[]
// )
// //state config
// const store=createStore(reducer,applyMiddleware(createlogger));
// store.dispatch(addTodo("123"))
// store.dispatch(todoCompleted(0));
//
// addTodo.assignTo(store);
// addTodo("标题","ewqrew");
//
// var name1 = "p_name_1";
// var name2 = "p_name_2";
//
// var obj = {
//     [name1]: "value1",
//     [name2]: "value2"
// };
//
// console.log(obj["p_name_1"]);
// abcdefghijlklmnopqrstuvwxyz
//
// abcdefghijklmnopqrstuvwxyz






