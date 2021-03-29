const Routes = () => {
    <Router>
        <Switch>
            <Route exact path="/path1" component={comp1} />
            <Route exact path="/path2" component={comp2} />
            <Route exact path="/path3" component={comp3} />
            <Route exact path="/path4" component={comp4} />
        </Switch>
    </Router>
}

export default Routes;