import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap';
import Textarea from './components/textarea';

const tempSidebar = [
  {
    id: 0,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    id: 1,
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 2,
    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
  }
];

const selectNote = (e) => {

};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('TextArea extends React.Component: ', props);
  }
  componentDidMount(){
    this.setState({ notes: tempSidebar });
  }
  selectedNote(i){
    this.setState({ selectedNote: i });
  }
  render() {
    const notes = this.state ? this.state.notes : null;
    return (
      <div className="row">
        <div className='col col-sm-2 sidebar'>
          { tempSidebar.map(i => {
            return <div className="note" key={ i.id } onClick={() => this.selectedNote(i) } > {i.content.substring(0, 30)} </div>;
          }

          ) }
        </div>
        <div className='col-sm-10 editor'>
          <Textarea selectedNote={ this.state ? this.state.selectedNote : null  } />
        </div>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
