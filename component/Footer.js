/**
 * Created by likon on 2016/8/3.
 */
import React from 'react'

export default class Footer extends React.Component{
    renderFilter(filter,name){
        if (filter===this.props.filter){
            return name
        }
        console.log(name);
        console.log(filter.toString());
        return(
            <a href='#' onClick={e=>{
                e.preventDefault()
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }
    renderUndo(){
        return(
            <p>
                <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}></button>
                <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}></button>
            </p>
        )
    }

    render() {
        return (
            <div>
                {this.renderFilter()}
                {this.renderUndo()}
            </div>
            // <p>
            //     Show:
            //     {' '}
            //     {this.renderFilter('SHOW_ALL', 'All')}
            //     {', '}
            //     {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            //     {', '}
            //     {this.renderFilter('SHOW_ACTIVE', 'Active')}
            //     .
            // </p>
        )
    }
}
Footer.propTypes={
    onFilterChange:React.PropTypes.func.isRequired,
    filter:React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
