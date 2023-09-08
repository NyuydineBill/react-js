import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.counter.value ,
        tags : []
        // imageUrl: "https://picsum.photos/201"

        };


// constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
// }    
    renderTags(){
        // if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        // 
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }
        
    handleIncrement = (product) => {
        console.log(product)
        this.setState({ value: this.state.value + 1})
    }


    render(){
        return (
            <div> 
                {/* <img src={this.state.imageUrl} alt="image"></img> */}
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button onClick={ () => 
                    this.handleIncrement ({ id : 1})} 
                    className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete( this.props.counter.id )} 
                className='btn btn-danger ml-2'>Delete</button>
                { this.renderTags() }
            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    } 

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value
    }
}
export default Counter