/**
 * Created by likon on 2016/8/3.
 */

import React from 'react'
import { connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../action'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import Footer from '../component/Footer'
import {ActionCreators} from 'redux-undo'

class App extends React.Component{
    render(){
        const {dispatch,visibleTodos,visibilityFilter}=this.props
        return(
            <div>
                <AddTodo
                    onAddClick={text=>
                        dispatch(addTodo(text))
                }/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>
                        dispatch(completeTodo(index))
                    }/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter=>dispatch(setVisibilityFilter(nextFilter))}
                    onUndo={()=>dispatch(ActionCreator.undo())}
                    onRedo={()=>dispatch(ActionCreators.redo())}
                    undoDisabled={this.props.undoDisabled}
                    redoDisabled={this.props.redoDisabled}
                />
            </div>
        )
    }
}
App.propTypes={
    visibleTodos:React.PropTypes.arrayOf(React.PropTypes.shape({
        text:React.PropTypes.string.isRequired,
        completed:React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter:React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
]).isRequired
}
function selectTodos(todos,filter) {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}

function select(state) {
    //const presentTodos=state.todos.present;
    return {
        undoDisabled:state.todos.past.length===0,
        redoDisabled:state.todos.future.length===0,
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        //visibleTodos:selectTodos(presentTodos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)
