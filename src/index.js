import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArticleContainer from './ArticleContainer'
import Tabs from './Tabs';
import Tab from './Tab';
import Client from './Client'
import {BrowserRouter, Route, Link, Switch, Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const arr1 = [{title:1, text:'fuck the homework'}, {title:2, text:''},{title:3, text:''},{title:4, text:''},{title:5, text:''}];
const arr2 = [{title:1, text:1}];
const data =[{id: 1, name: 'Book', price: '10.00', stock: 100, taxable: 'N'},
    {id: 2, name: 'Food', price: '15.00', stock: 150, taxable: 'N'}];

const Home = () => {
    return (<table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {data.map(n =>
            <tr>
                <td>{n.id}</td>
                <td>{n.name}</td>
                <td><Link to={`/details/${n.id}`} >Details</Link></td>
            </tr>
        )}
        </tbody>
    <tfoot>
        <Link to='/404' >404</Link>
    </tfoot>
    </table>)};

const Product = ({match}) => {
    return (<div>
                <Link to='/'>Home</Link>
                {data.filter(n => n.id == match.params.id).map(n =>
                    <ul>
                        <li>Product Name: {n.name}</li>
                        <li>Price: {n.price}</li>
                        <li>Stock: {n.stock}</li>
                        <li>Taxable: {n.taxable}</li>
                    </ul>
                )}
            </div>
    )};

const NoMatch = () => {
    return (
        <div>
            404!
        </div>
    );
};

const Test = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route exact path="/" render={(props) => {
                    return (
                        <div>
                            <Home {...props}/>
                        </div>
                    );
                }}/>
                <Route path="/details/:id" render={(props) => {
                    return (
                        <div>
                            <Product {...props}/>
                        </div>
                    );
                }}/>
                <Route component={NoMatch} />
            </switch>
        </BrowserRouter>
    );
};

ReactDOM.render((
    <Client/>
), document.getElementById('root'));
registerServiceWorker();
