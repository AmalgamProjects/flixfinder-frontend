import React, { Component } from 'react';
import Styles from './HeaderSearch.module.css';
import { search, caretDown } from '../../../assets/icons';

interface IOwnProps {}
type Props = IOwnProps;

class HeaderSearch extends Component<Props> {
  render() {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.dropdown}>
          <select className={Styles.select}>
            <option>Movies</option>
            <option>TV shows</option>
          </select>
          <div className={Styles.selectIcon}>{caretDown}</div>
        </div>
        <input className={Styles.input} placeholder="Type movie title, e.g. Harry Potter" />
        <div className={Styles.searchIcon}>{search}</div>
      </div>
    );
  }
}

export default HeaderSearch;
