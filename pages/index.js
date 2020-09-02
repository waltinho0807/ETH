import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import create from '../ethereum/create';
import Layout from '../components/Layout';
import {Link} from '../routes';



export default class Index extends Component {

    static async getInitialProps() {
        const lottery = await create.methods.getDeployedCampaigns().call();
        return { lottery };
    }

    renderLottery() {
        const items = this.props.lottery.map(address => {
            return {
                header: address,
                description:( <Link route={`/lottery/${address}`}><a>View Lottery</a></Link>),
                fluid: true

            };
        });

        return <Card.Group items={items} />
    }


    render() {
        return (
            <Layout>
                <div>
                    
                    <h3>Opens Lottery</h3>
                   
                   <Link route="lottery/new">
                    <a>   
                    <Button
                        floated="right"
                        content="Create Lottery"
                        icon="add circle"
                        primary={true}
                    />
                    </a>
                    </Link>
                     {this.renderLottery()}
                </div>
            </Layout>
        )
    }
}


