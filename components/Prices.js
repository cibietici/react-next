class Prices extends React.Component {
    state = {
        currency: 'EUR'
    }


    render() {

        let list = '';
        if(this.state.currency === 'USD') {
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.USD.description}:<br />
                        <span className="badge badge-primary">{this.props.bpi.bpi.USD.code}</span>
                        <strong className="ml-2">{this.props.bpi.bpi.USD.rate}</strong>
                    </li>
        } else if(this.state.currency === 'GBP') {
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.GBP.description}:<br />
                        <span className="badge badge-primary">{this.props.bpi.bpi.GBP.code}</span>
                        <strong className="ml-2">{this.props.bpi.bpi.GBP.rate}</strong>
                    </li>
        } else if(this.state.currency === 'EUR') {
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.EUR.description}:<br />
                        <span className="badge badge-primary">{this.props.bpi.bpi.EUR.code}</span>
                        <strong className="ml-2">{this.props.bpi.bpi.EUR.rate}</strong>
                    </li>
        }
        return (
        <div>
            <ul className="list-group mt-4">
                {list}
            </ul>
            <select onChange={e => this.setState({currency: e.target.value})} className="form-control mt-4">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
        );
    }
}

export default Prices;