import './index.scss';
import React from 'react';
import Moment from 'moment';

function getdateFormated (date){
    var otherDates = Moment(date).fromNow();
    var calback= function () {
       return '['+otherDates+']';
    }
    return Moment(date).calendar(null,{
       sameDay: '[Today]',
       nextDay:calback,
       nextWeek: calback,
       lastDay: calback,
       lastWeek: calback,
       sameElse: 'MMM DD, YYYY'
   });
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes
    };
    console.log('Sidebar extends React.Component: ', props);
    this.selectedNote = this.selectedNote.bind(this);
  }
  selectedNote(event, id){
    this.props.selectedNote(id);
  }
  render() {
    const notes = this.props.notes;

    return (
      <div className="sidebar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ padding: '0.45rem 1rem'}}>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </nav>
        {this.props.notes.map(i => {
          return (
            <div className="note" key={i._id} onClick={(e) => this.selectedNote(e, i._id)}>
              <span className="desc">{ i.delta.ops[0].insert.substring(0, 45)} </span>
              <span className="when">{ getdateFormated(i.updatedAt) }</span>

            </div>);
        })}
      </div>
    );
  }
}
