import Posts from "./Posts";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PostDetails from "./PostDetails";
import {RouteComponentProps} from "react-router/ts4.0";


const App = () => {
  return (
      <div>

        <Router>
            <Link to={'/posts'}>Posts</Link>

            <Route exact path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/posts/:id'} render={(props: RouteComponentProps) => <PostDetails {...props}/>}/>

        </Router>

      </div>
  );
}

export default App;
