import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Lottery from '../../ethereum/lottery';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import EntryForm from '../../components/EntryForm';
import PickWinner from '../../components/PickWinner';
import Withdraw from '../../components/Withdraw';
import {Link} from '../../routes';

class LotteryShow extends Component {
    static async getInitialProps(props) {
        const lottery = Lottery(props.query.address);



        const players = await lottery.methods.getPlayers().call();
        const premium = await lottery.methods.getPremium().call();
        const restPlayers = await lottery.methods.getRestPlayers().call();
        const countPlayers = await lottery.methods.getCountPlayers().call();
        const entryValue = await lottery.methods.entryValue().call();

        const convert = String(entryValue);
        const convertBin = parseInt(restPlayers, 9);
        
        //console.log(premium);
        //console.log(restPlayers);
        //console.log(countPlayers);

        return {
            address: props.query.address,
            numberOfPlayers: players,
            valuePremium: premium,
            restPlayers: restPlayers,
            countPlayers: countPlayers,
            convert: convert
        };
    }

    renderCards() {
        const {
            numberOfPlayers,
            valuePremium,
            restPlayers,
            countPlayers,
           convert
        } = this.props;
        const items = [
            {
                header: web3.utils.fromWei(convert, 'ether'),
                meta: 'Value to contribute to this raffle',
                description: 'The value of premium for winner the raffle',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(valuePremium, 'ether'),
                meta: 'Value of Premium',
                description: 'The value of premium for winner the raffle',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: restPlayers,
                meta: 'How many remain',
                description: 'Number of participants left to complete the draw',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: countPlayers,
                meta: 'Number of players',
                description: 'Number of players to carry out the draw',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: numberOfPlayers,
                meta: 'Already entered',
                description: 'Players who have already joined',
                style: { overflowWrap: 'break-word' }
            }];

        return <Card.Group items={items} />
    };



    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={10}>
                        
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <EntryForm address={this.props.address} />
                        <PickWinner address={this.props.address} />
                        <Withdraw  address={this.props.address}/>
                    </Grid.Column>
                </Grid>

            </Layout>
        )
    }
}

export default LotteryShow;