import React from 'react';
import { Menu } from 'semantic-ui-react'


export default function NavMenu({totalprice,count}) {
    return(
        <Menu>
        <Menu.Item>
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            Итог: <b>{totalprice} </b> руб
          </Menu.Item>

          <Menu.Item>
            Корзина {count}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
};
