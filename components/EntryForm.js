import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Lottery from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import {Router} from '../routes';


class EntryForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const lottery = Lottery(this.props.address);

        this.setState({loading: true, errorMessage: ''})

        try {
           const accounts = await web3.eth.getAccounts();
           await lottery.methods.enter().send({
               from: accounts[0],
               value: web3.utils.toWei(this.state.value, 'ether')
           });

           this.setState({loading: false, errorMessage: ''})
           Router.replaceRoute(`/lottery/${this.props.address}`) 
        } catch (error) {
            this.setState({errorMessage: error})
        }
    }
      render(){
          return(
              <Form onSubmit={this.onSubmit}>
                  <Form.Field>
                      <label>Enter in Lottery</label>
                      <Input 
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                        label="ether"
                        labelPosition="right"/>
                  </Form.Field>
                  <Message error header="Ooops!" content={this.state.errorMessage} />
                  <Button primary loading={this.state.loading}>
                      Entry
                  </Button>
              </Form>
          )
      }
}

export default EntryForm;