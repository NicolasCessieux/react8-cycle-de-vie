import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: "",
        globalTitle: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(event) {
    this.setState({ title: event });
  }

  updateGlobalTitle(event) {
    this.setState({ globalTitle: `Mon formulaire - ${this.state.title}` });
  }

  handleSubmit(event) {
    alert(`You submitted:\n\n${ JSON.stringify(this.state,1,1) }`);
    event.preventDefault();
  }

  componentDidMount() {
    console.log("Formulaire rendu");
  }

  componentDidUpdate() {
    console.log("Titre changé");
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="Text"
            placeholder="Text"
            onChange={ (e) => this.updateTitle(e.target.value)}
          /><br/>
          <input
            type="submit"
            value="Submit"
            onClick={ (e) => this.updateGlobalTitle(e.target.value)}
          /><br/>
        </form>
      </div>
    );
  }
}
 
export default SignUp;
