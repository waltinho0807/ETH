import React, { Component } from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import create from '../../ethereum/create';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';

export default class NewLottery extends Component {
    state = {
         numberOfPlayers: '',
         valueEntry: '',
         errorMessage: '',
         loading: false
    };

    onSubmit = async (event)=>{
          event.preventDefault();

          this.setState({loading: true, errorMessage: ''})
          try{
           
            const accounts = await web3.eth.getAccounts();
            const {numberOfPlayers, valueEntry, address} = this.state;
            console.log(accounts)
            await create.methods
            .createGame(numberOfPlayers, web3.utils.toWei(valueEntry,'ether') )
            .send({
                 from: accounts[0],
                 value: '10000000000000000',
                 gas: '3000000',
                
            });

            Router.pushRoute('/');
            
          }catch(err){
            this.setState({errorMessage: err.message}); 
          }

          this.setState({loading: false})
         
    }

    render() {
        return (
            <Layout>
                <h3>Create a Lottery</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Number Of Players</label>
                        <Input
                         label="Number"
                         labelPosition="right" 
                         value={this.state.numberOfPlayers}
                         onChange={event => this.setState({numberOfPlayers: event.target.value})}
                         />
                    </Form.Field>
                    <Form.Field>
                        <label>Value For Entry</label>
                        <Input
                         label="ETH"
                         labelPosition="right" 
                         value={this.state.valueEntry}
                         onChange={event => this.setState({valueEntry: event.target.value})}
                         />
                    </Form.Field>
                    <Message error header="Ooops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
                
            </Layout>            
            
        )
    }
}
