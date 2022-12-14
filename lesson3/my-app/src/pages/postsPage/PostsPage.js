import React, {Component} from 'react';
import Posts from "../../components/posts/Posts";

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {posts: [], input:""}
    }
    getPosts = () => {
        this.setState({posts: ["news1", "news2","news3"]})
    }

    changeInput = e => {
        // console.log(e.target.value)
        this.setState({input: e.target.value})

    }
    addUser = ()=> {
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <button onClick={this.getPosts}>get posts</button>
                <Posts postList={this.state.posts}/>
                <h1>----------------------------------</h1>

                <input type="text" placeholder="user" onChange={this.changeInput}/>
                <button onClick={this.addUser}>add</button>

            </div>
        );
    }
}

export default PostsPage;