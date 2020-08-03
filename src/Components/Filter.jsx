import React from 'react'
import {Menu, Input } from 'semantic-ui-react';

export default function Filter({
  activeItem,
  setFilter,
  searchQuiery,
  setSearch,
}) {
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

        <Menu.Item>
          <Input
          placsholder='Search'
          icon='search'
          value={searchQuiery}
          onChange={(e)=>setSearch(e.target.value)}
          /> 
        </Menu.Item>
      </Menu>
    )
};