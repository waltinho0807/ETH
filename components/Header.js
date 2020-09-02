import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu>
            <Link route="/">
                <a className="item">EthereumXGames</a>
            </Link>
            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">Lottery</a>
                </Link>
                <Link route="/">
                    <a className="item">Coin Flip</a>
                </Link>
                <Link route="/">
                    <a className="item">Market</a>
                </Link>

            </Menu.Menu>
        </Menu>
    )
}