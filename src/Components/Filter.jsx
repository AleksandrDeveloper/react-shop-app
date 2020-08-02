import React from 'react'
import {Menu } from 'semantic-ui-react';

export default function Filter({activeItem,setFilter}) {
    const handleItemClick=(e, { name })=>{
        setFilter(name)
    }
    return(
        <Menu secondary>
        <Menu.Item
          name='All'
          active={activeItem === 'All'}
          onClick={handleItemClick}
        >Все</Menu.Item>
        <Menu.Item
          name='PriceHigth'
          active={activeItem === 'PriceHigth'}
          onClick={handleItemClick}
        >Цена-дорогие</Menu.Item>
        <Menu.Item
          name='PriceLoy'
          active={activeItem === 'PriceLoy'}
          onClick={handleItemClick}
        >Цена-дещевые</Menu.Item>
         <Menu.Item
          name='Popylar'
          active={activeItem === 'Popylar'}
          onClick={handleItemClick}
        >Популярные</Menu.Item>
      </Menu>
    )
};


// export default class MenuExampleSecondary extends React.Component {
//   state = { activeItem: 'Все' }

//   handleItemClick = (e, { name }) => {
//     this.setState({ activeItem: name })
//     const {setFilter}=this.props;
//     setFilter(name)
//   }

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu secondary>
//         <Menu.Item
//           name='Все'
//           active={activeItem === 'Все'}
//           onClick={this.handleItemClick}
//         >Все</Menu.Item>
//         <Menu.Item
//           name='Цена-дорогие'
//           active={activeItem === 'Цена-дорогие'}
//           onClick={this.handleItemClick}
//         >Цена-дорогие</Menu.Item>
//         <Menu.Item
//           name='Цена-дещевые'
//           active={activeItem === 'Цена-дещевые'}
//           onClick={this.handleItemClick}
//         >Цена-дещевые</Menu.Item>
//          <Menu.Item
//           name='Популярные'
//           active={activeItem === 'Популярные'}
//           onClick={this.handleItemClick}
//         >Популярные</Menu.Item>
       
//       </Menu>
//     )
//   }
// } 
