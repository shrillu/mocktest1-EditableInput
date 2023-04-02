import {Component} from 'react'

import './App.css'

// Replace your code here

class App extends Component {
  state = {isClicked: false, inputValue: ''}

  onClickButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {isClicked, inputValue} = this.state

    const renderElement = isClicked ? (
      <p>{inputValue}</p>
    ) : (
      <input
        type="text"
        value={inputValue}
        onChange={this.onChangeInput}
        className="input-box"
      />
    )

    const renderBtnName = isClicked ? 'Edit' : 'Save'

    return (
      <div className="bg-container">
        <div className="btn-container">
          <h1>Editable Text Input</h1>
          <div>
            {renderElement}
            <button type="button" onClick={this.onClickButton} className="btn">
              {renderBtnName}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
