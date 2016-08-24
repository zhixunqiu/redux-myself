module.exports = {
    path: '/:login/:name',
    getComponent(nextState, cb) {
    require.ensure([], (require) => {
        cb(null, require('./containers/RepoPage').default)
    })
}
}
