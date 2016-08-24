import React from 'react'
import { Route } from 'react-router'
//import App from './containers/App'
//import UserPage from './containers/UserPage'
//import RepoPage from './containers/RepoPage'

export default (
  //<Route path="/" component={App}>
  //  <Route path="/:login/:name"
  //         component={RepoPage} />
  //  <Route path="/:login"
  //         component={UserPage} />
  //</Route>

//{
//    path: '/',
//    component: App,
//    //indexRoute: { component: DefaultComponent},
//    childRoutes: [
//        {path: '/:login/:name', component: RepoPage},
//        {path: '/:login', component: UserPage}
//    ]
//}

  //异步加载
    {
        path: '/',
        component: require('./containers/App').default,
        //component: App,
        //indexRoute: { component: DefaultComponent},
        childRoutes: [
            require('./routes/user'),
            require('./routes/repo')
        ]
    }
)
