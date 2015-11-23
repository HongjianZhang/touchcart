"use strict";

var List = React.createClass({
  displayName: "List",

  render: function render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(function (item) {
        return React.createElement(
          "div",
          { key: item.name },
          React.createElement(
            "li",
            null,
            React.createElement(
              "h6",
              null,
              React.createElement(
                "a",
                {href:"sanp.html"},
                item.name
              )
            ),
            item.author,
            React.createElement(
              "b",
              null,
              item.location
            )
          ),
          " ",
          React.createElement(
            "li",
            null,
            React.createElement(
              "p",
              { "class": "flow-text" },
              item.recentComment
            )
          )
        );
      })
    );
  }
});

var FilteredList = React.createClass({
  displayName: "FilteredList",

  filterList: function filterList(event) {
    var updatedList = this.state.booklist;
    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function getInitialState() {
    return {
      booklist: [{
        name: "San Pellegrino",
        }, {
        name: "Peach",
        }, {
        name: "Grapes",
        }],
        {
        name: "Apple",
        }],
        {
        name: "Orange",
        }],
        {
        name: "MacBook Air",
        }],
      items: []
    };
  },
  componentWillMount: function componentWillMount() {
    this.setState({ items: this.state.booklist });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "filter-list" },
      React.createElement("input", { type: "text", placeholder: "Search", onChange: this.filterList }),
      React.createElement(List, { items: this.state.items })
    );
  }
});

React.render(React.createElement(FilteredList, null), document.getElementById('mount-point'));
