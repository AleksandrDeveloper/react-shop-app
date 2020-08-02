import React from 'react'
import {Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends React.Component {
  state = { activeItem: 'Все' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    const {setFilter}=this.props;
    setFilter(name)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='Все'
          active={activeItem === 'Все'}
          onClick={this.handleItemClick}
        >Все</Menu.Item>
        <Menu.Item
          name='Цена-дорогие'
          active={activeItem === 'Цена-дорогие'}
          onClick={this.handleItemClick}
        >Цена-дорогие</Menu.Item>
        <Menu.Item
          name='Цена-дещевые'
          active={activeItem === 'Цена-дещевые'}
          onClick={this.handleItemClick}
        >Цена-дещевые</Menu.Item>
         <Menu.Item
          name='Популярные'
          active={activeItem === 'Популярные'}
          onClick={this.handleItemClick}
        >Популярные</Menu.Item>
       
      </Menu>
    )
  }
} 
