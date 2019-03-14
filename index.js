import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import perfil from './perfil.png'

//<script type="text/javascript" src="react-0.13.2.js"></script>


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*var today = new Date();
document.getElementById('time').innerHTML=today;
<span id="time"/><br/>*/

class Header extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tweet: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		const tweet = this.state;
		return(
			<div class="row" onChange={this.handleChange}>
				<img src={perfil} className="fotoPerfil" alt="fotoPerfil" width="50"/>
				<input type="text" name="Texto" placeholder="Tweet about something..."/>
				<input type="submit" name="Submit" value="TweetSubmit"/>
				<div class="row">
				<div class="col-md-3">
					<img src={perfil} className="fotoPerfil" alt="fotoPerfil" width="50"/>
					<p>14/03/2019</p>
					<input value={tweet} name="Tweet"/>
				</div>
			</div>
			</div>
		);
	}
};

ReactDOM.render(<Header />, document.getElementById('root'));