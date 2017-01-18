/**
 * Created by likon on 2016/8/8.
 */
import expect from 'expect';
import * as actions from  './action'
import * as types  from  './actionType'

describe('acion',()=>{
    it('should create an action to add a todo',()=>{
        const text='finish docs';
        const expectedAction={
            type:types.ADD_TODO,
            text
        };
        expect(actions.addTodo(text)).toEqual(expectedAction);
    });
})




