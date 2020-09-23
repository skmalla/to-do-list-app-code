import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItems/ListItem";

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
    msg: "",
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  deleteItemHandler = (itemsIndex) => {
    var itemName = this.state.items[itemsIndex].text;
    let item = this.state.items;

    item.splice(itemsIndex, 1);
    this.setState({
      items: item,
      msg: itemName + " deleted Successfully!",
    });
  };

  setUpdateHandler = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
        msg: "Item Added To The List Successfully!",
      });
    }
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <div className='card mt-5'>
              <div className='card-header bg-secondary text-center'>
                <h5 className='bold'>ENTER ITEMS</h5>
              </div>
              <div className='card-body bg-danger'>
                <form action='' onSubmit={this.addItem}>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Enter Your Text'
                      value={this.state.currentItem.text}
                      onChange={this.handleInput}
                    />
                    <span>
                      <button className='text-center'>
                        <i className='fa fa-plus-circle fa-2x fa-plus'></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <div className='card-footer bg-primary text-center'>
                <h6 className='bold'>Message:</h6>
                <h6 className='text-danger bold'>{this.state.msg}</h6>
              </div>
            </div>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <ListItem
              items={this.state.items}
              deleteItem={this.deleteItemHandler}
              setUpdate={this.setUpdateHandler}
            />
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    );
  }
}

export default App;
