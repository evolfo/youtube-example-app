import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input name="searchText" onChange={this.props.updateSearchTerm} type="text" placeholder="Search Youtube..."/>
            <button onClick={this.props.processSearch}>Search YouTube</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
