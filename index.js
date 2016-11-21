import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './public/store/configureStore'
import { Router, hashHistory,browserhistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Route, IndexRoute, Link } from 'react-router'
import SimpleChart from './public/components/echarts/simpleChart'
import HomeView from './public/containers/HomeView'
import MainView from './public/containers/MainView'
import HeaderView from './public/containers/HeaderView'
import FootView from './public/containers/FootView'



const App = ({children}) => (
    <div>
        <HeaderView/>
        {children}
        <FootView/>
    </div>
);

const Home = () => (<HomeView  />);
const ExecReports = () => ( <MainView />);
const ManagerReports = () => (<SimpleChart />);

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={ExecReports}/>
        <Route path="third" component={ManagerReports}/>
    </Route>
);

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
      <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
