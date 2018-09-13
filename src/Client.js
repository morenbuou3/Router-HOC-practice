import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux";

const Home = () => (<div>HOME</div>);
const Classes = () => (<div>Classes</div>);
const AboutUs = () => (<div>AboutUs</div>);

const Login = ({logged, onLogin}) => (
    <div>
        {
            !logged &&
            <div>
                <label htmlFor="username">Username:</label>
                <input ref={(ref) => this.username = ref} id="username" type='text' placeholder='username'/>
                <label htmlFor="password">Username:</label>
                <input ref={(ref) => this.password = ref} id="password" type='password' placeholder='password'/>
                <button onClick={
                    () => {
                        if (this.username.value === 'tw' && this.password.value === 'tw') {
                            onLogin();
                        }
                    }
                }>login
                </button>
            </div>
        }
        {
            logged && <Redirect to="/"/>
        }
    </div>
);

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.isLoginSucceed;
        default:
            return state;
    }
};

const Reducer = combineReducers({
    isAuthentication: loginReducer,
});

const store = createStore(Reducer);

const mapStateToProps = ({isAuthentication}) => ({logged: isAuthentication,});

const mapDispatcherToProps = (dispatch) => ({
    onLogin: () => dispatch({type: 'LOGIN', isLoginSucceed: true}),
});

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {logged, ...rest} = props;
        return (
            <div>
                {!logged && <Redirect to="login"/>}
                {logged && <WrappedComponent {...rest} />}
            </div>
        );
    };
    return connect(mapStateToProps)(View);
};

const LoginContainer = connect(mapStateToProps, mapDispatcherToProps)(Login);

const ClassesContainer = withAuthentication(Classes);
const AboutUsContainer = withAuthentication(AboutUs);

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/classes" component={ClassesContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/about" component={AboutUsContainer}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);