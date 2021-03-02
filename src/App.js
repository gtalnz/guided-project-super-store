import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Deals from './components/Deals'
import Header from './components/Header'
import Home from './components/Home'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/deals' component={Deals} />
				<Route path='/cart' component={Cart} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	)
}

export default App
