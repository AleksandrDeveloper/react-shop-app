import React from 'react';
import { Menu } from 'semantic-ui-react'


export default function NavMenu({}) {
    return(
        <Menu>
        <Menu.Item>
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            Итог: <b>0</b> руб
          </Menu.Item>

          <Menu.Item>
            Корзина
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
};
