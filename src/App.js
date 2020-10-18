import React from 'react';
import AppChildPost from './components/AppChildPost';
import './App.css';

const details = [
  {
    id: 1,
    name: 'Mango',
    message: 'soskosk sijisu osiuoisuou osiusoiu'
  },
  {
    id: 2,
    name: 'Mpp o',
    message: 's  sisisin [ps[psiuoisuou osiusoiu'
  },
  {
    id: 3,
    name: 'oragne',
    message: 'sossss  osiusoiu'
  },
  {
    id: 4,
    name: 'tomato',
    message: 'toooos osiusoiu'
  }
]

class App extends React.Component {
  click(clickedId) {
    console.log('Clicked', clickedId);
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
                message={detail.message}
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