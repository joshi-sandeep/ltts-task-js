import React, { Component } from "react";
 import axios from "axios";
import { ToastContainer } from "react-toastify";
//import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = { 
    posts: []
  };
  

   async componentDidMount() { 
     const {data: posts}   = await axios.get(config.apiEndpoint); 
     var self = this;
 
    self.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
     const { data: post } = await axios.post(config.apiEndpoint, obj);
    //const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts })
  };

  handleUpdate = async post => {
    const originalPost = { ...post };
    post.title = "UPDATED";

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });

    try {
       await axios.put(config.apiEndpoint + "/" + post.id, post); 
    } catch (ex) {
      console.log('Reverting failed update for post:' + post.id);
      posts[index] = { ...originalPost };
      this.setState({ posts });
    }
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
       await axios.delete(config.apiEndpoint + "/" + post.id); 
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    console.log(config.apiEndpoint);
    console.log(this.state.posts.data);
    var arr =[ {id: 1, name: "cerulean", year: 2000, color: "#98B2D1", pantone_value: "15-4020"},{id: 2, name: "fuchsia rose", year: 2001, color: "#C74375", pantone_value: "17-2031"}, {id: 3, name: "true red", year: 2002, color: "#BF1932", pantone_value: "19-1664"}]
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          
            { this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
