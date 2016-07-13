import React, {PropTypes} from 'react';

class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const post = this.state.post;
    post.title = event.target.value;
    this.setState({post: post});
  }

  onClickSave() {
    alert('Saving');
  }

  render () {
    return (
      <div>
        <h1>Post</h1>
        <h2>Add post</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.post.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
        </div>
    );
  }
}

export default PostsPage;
