import React from 'react';
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
  click(clickedId) {
    console.log('Clicked id =', clickedId);
  }

  render() {
    return (
      <ul>
        {
          details.map(
            detail => (
              <AppChildPost
                key={detail.id}
                id={detail.id}
                name={detail.name}
                clicked={this.click}
              />
            )
          )
        }
      </ul>
    );
  }
}

export default App;