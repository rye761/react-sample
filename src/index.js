import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: null
    }
  }

  handleClick(animal) {
    this.setState({ currentImage: animal });
  }

  render() {
    let currentImage = null;
    if (this.state.currentImage) {
      let currentImageURL;
      if (this.state.currentImage == 'dog') {
        currentImageURL = 'dog.jpg';
      } else {
        currentImageURL = 'cat.jpg';
      }
      currentImage = <img src={currentImageURL} />;
    }

    return (
      <div className="imageComponent">
        <div className="buttonBox">
          <button className="btn btn-dark" onClick={ () => this.handleClick('dog')}>Dog</button>
          <button className="btn btn-light" onClick={ () => this.handleClick('Cat')}>Cat</button>
        </div>
        <div className="imageContainer">
          {currentImage}
        </div>
      </div>
    );
  }
}

class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalName: '',
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ finalName: this.state.name, name: '' });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="nameComponent">
        <p>{ 'Hello ' + this.state.finalName + '!' }</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className="form-control" type="text" value={ this.state.name } onChange={ this.handleChange } />
          </label>
          <input className="btn btn-success" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class TabUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  handleClick(i) {
    this.setState({ currentTab: i});
  }

  render() {
    let currentView;
    if (this.state.currentTab == 0) {
      currentView = <NameComponent />;
    } else {
      currentView = <ImageComponent />;
    }
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={"nav-link " + (this.state.currentTab == 0 ? "active" : "")} onClick={ () => this.handleClick(0) } href="#">Name</a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.currentTab == 1 ? "active" : "")} onClick={ () => this.handleClick(1) }href="#">Image</a>
          </li>
        </ul>
        { currentView }
      </div>
    );
  }
}

ReactDOM.render(<TabUI />, document.getElementById('root'));
