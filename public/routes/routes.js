import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import MainView from '../containers/MainView'
const App = ({children}) => (
    <div>
        <header>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Caspian</Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-user">
                        <ul className="nav navbar-nav">
                            <li><Link to="/foo">Exec Reports<span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/third">Manager Reports<span className="sr-only">(current)</span> </Link></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Username <span className="glyphicon glyphicon-user"></span> <span className="sr-only">(current)</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        {children}
    </div>
);

const Home = () => (<div>Im'Main Page</div>);
const ExecReports = () => ( <MainView view="noting"/>);
const ManagerReports = () => (<div>Im'Third Page</div>);


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="foo" component={ExecReports}/>
    <Route path="third" component={ManagerReports}/>
  </Route>
);

export default routes
