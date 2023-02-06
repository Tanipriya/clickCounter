import {Component} from 'react'
import './index.css'


class clickCounter extends Component {
    state= {
        count: 0,
    }

    onIncrement= () => {
        this.setState(prevState =>({count: prevState.count +1}))
    }

    render() {
        const {count} = this.state
        return (
          <div className="click-counter">
            <h1 className="heading">
              The Button has been clicked <br />
              <span className="span-heading">{count}</span> times
            </h1>
            <p className="description">click the button to increase the count</p>
            <button type="button" className="click-btn" onClick={this.onIncrement}>
              Click Me
            </button>
            
          </div>
        )
      }
    }
export default clickCounter
    
