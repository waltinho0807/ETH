import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Lottery from '../ethereum/lottery';
import web3 from '../ethereum/web3';
import { Router } from '../routes';


class Whithdraw extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const lottery = Lottery(this.props.address);

        this.setState({ loading: true, errorMessage: '' })

        try {
            const accounts = await web3.eth.getAccounts();
            await lottery.methods.withdrawETH().send({
                from: accounts[0],
                gas: '3000000'
            });

            this.setState({ loading: false, errorMessage: '' })
            Router.replaceRoute(`/lottery/${this.props.address}`)
        } catch (error) {
            this.setState({ errorMessage: error })
        }
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Whithdraw</label>
                    <p>
                        After the draw, the lottery manager can withdraw his share</p>
                </Form.Field>
                <Message error header="Ooops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                    Entry
                  </Button>
            </Form>
        )
    }
}

export default Whithdraw;