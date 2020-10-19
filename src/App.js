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
      clickedObject: null,
      active: false,
    };
    this.click = this.click.bind(this);
    this.colorChange = this.colorChange.bind(this);
  }

  click(clickedId) {
    const foundObject = details.find(
      detail => detail.id === clickedId,
    );
    // console.log(
    //   'App::',
    //   foundObject,
    // );

    this.setState({
      clickedObject: foundObject,
      active: true, 
    })
  }

  colorChange(redButton){
    console.log(`change COLOR of id ${redButton} to red`)
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
                  color={this.colorChange}
                  isActive={
                    this.state.clickedObject && 
                    this.state.clickedObject.id &&
                    this.state.clickedObject.id === detail.id
                  }
                  
                />
              )
            )
          }
        </ul>
        {console.log(`this from app ${this.state.active}`)}
        <AppChildViewPost
          clickedObject={this.state.clickedObject}
          active={this.state.active}
        />
      </>
    );
  }
}

export default App;