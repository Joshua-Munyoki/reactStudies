import React from 'react';
import AppChildViewPost from './components/AppChildViewPost';
import AppChildPost from './components/AppChildPost';
import './App.css';

const details = [
  {
    id: 29292929,
    name: 'Mango',
    message: 'soskosk sijisu osiuoisuou osiusoiu'
  },
  {
    id: 237377,
    name: 'Mpp o',
    message: 's  sisisin [ps[psiuoisuou osiusoiu'
  },
  {
    id: 9990203,
    name: 'oragne',
    message: 'sossss  osiusoiu'
  },
  {
    id: 11993934,
    name: 'tomato',
    message: 'toooos osiusoiu'
  },
  {
    id: 9393887487,
    name: 'tomato',
    message: 'toooos osiusoiu'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedObject: null
    };
    this.click = this.click.bind(this);
  }

  click(clickedId) {
    const foundObject = details.find(
      detail => detail.id === clickedId,
    );

    console.log(
      'App::',
      foundObject,
    );

    this.setState({
      clickedObject: foundObject,
    })
  }

  render() {
    return (
      <>
        <ul>
          {
            details.map(
              detail => (
                <AppChildPost
                  key={detail.id}
                  id={detail.id}
                  name={detail.name}
                  // This is without setting bind(this) on constructor
                  // clicked={
                  //   (id) => {
                  //     this.click(id);
                  //   }
                  // }
                  clicked={this.click}
                />
              )
            )
          }
        </ul>
        <AppChildViewPost
          clickedObject={this.state.clickedObject}
        />
      </>
    );
  }
}

export default App;