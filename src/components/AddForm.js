import {Component} from 'react';
class AddForm extends Component{
 constructor(props){
     super(props);
     this.state = {
         dir:[],
         item:{
             name:"",
             tel:""
         }
     }
     this.handleChange = this.handleChange.bind(this)
     this.add = this.add.bind(this)
 }
handleChange(event)
{
 const name =event.target.name;
 const value=event.target.value;
 let item = this.state.item;
 item[name]= value;
 this.setState({item:item})
}
 add(e){
  e.preventDefault()   
  let dir= this.state.dir;
  dir.push(this.state.item);
 }
  render(){
      return (
          <div className='col-md-6'>
              <form method='POST' onSubmit={this.add}>
                  <div className="mb-2">
                      <input 
                      type="text"
                      name="name"    
                      placeholder="Enter Name"
                      className="form-control"
                      value={this.state.item.name}
                      onChange={this.handleChange}
                      />
                  </div>
                  <div className="mb-2">
                      <input 
                      type="text"
                      name="tel"    
                      placeholder="Enter Phone"
                      className="form-control"
                      value={this.state.item.tel}
                      onChange={this.handleChange}
                      />
                  </div>
                  <div className="mb-2">
                      <button className="btn btn-success" type="submit">
                          Save
                      </button>
                  </div>
              </form>
          </div>
      )
  }
}



export default AddForm;
//Add form