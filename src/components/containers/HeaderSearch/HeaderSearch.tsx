import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Autosuggest, { SuggestionsFetchRequestedParams } from 'react-autosuggest';
import Styles from './HeaderSearch.module.scss';
import { search, caretDown } from '../../../assets/icons';
import { ISearchState } from './reducers';
import { loadData, clearSuggestions } from './actions';
import { IRootState } from '../../../types/redux';
import { ISearchParams } from '../../../api/search';
import { IMovie } from '../../../types/movie';

type TitleType = 'movie' | 'tvMovie' | 'tvSeries' | 'tvMiniSeries';
interface IState {
  value: string;
  titleType: TitleType;
}

interface IOwnProps { }
interface IConnectedProps { state: ISearchState; }
interface IConnectedDispatchProps {
  onLoadData: typeof loadData;
  onClearSuggestions: typeof clearSuggestions;
}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps;

interface ISuggestion {
  suggestion: IMovie;
}

const getSuggestionValue = (suggestion: any) => suggestion.primaryTitle;

const renderSuggestion = (suggestion: any) => (
  <div>
    {suggestion.primaryTitle}
  </div>
);

class HeaderSearch extends Component<Props, IState> {
  state = {
    value: '',
    titleType: 'movie' as TitleType,
  };

  handleSelected = (_event: FormEvent<any>, { suggestion }: any) => {
    const { history } = this.props;
    history.push(`/movie/${suggestion.id}`);
  };

  handleSearch = (input: SuggestionsFetchRequestedParams) => {
    const { titleType } = this.state;
    const { onLoadData } = this.props;
    const { value } = input;

    if (value && value.length > 1) {
      onLoadData({ search: value, titleType });
    }
  };

  handleClear = () => {
    const { onClearSuggestions } = this.props;
    onClearSuggestions();
  };

  onChange = (_event: FormEvent<any>, { newValue }: { newValue: string }) => {
    this.setState({
      value: newValue,
    });
  };

  handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { onClearSuggestions } = this.props;

    this.setState({
      titleType: event.target.value as TitleType,
    }, () => {
      onClearSuggestions();
    });
  };

  render() {
    const { state } = this.props;
    const { value, titleType } = this.state;

    const suggestions = state.results;

    const inputProps = {
      placeholder: 'Type movie title, e.g. Harry Potter',
      value,
      onChange: this.onChange,
    };

    return (
      <div className={Styles.wrapper}>
        <div className={Styles.dropdown}>
          <select className={Styles.select} onChange={this.handleTypeChange} value={titleType}>
            <option value="movies">Movies</option>
            <option value="tvMovie">TV shows</option>
            <option value="tvSeries">TV series</option>
            <option value="tvMiniSeries">TV mini series</option>
          </select>
          <div className={Styles.selectIcon}>{caretDown}</div>
        </div>
        <div className={Styles.autocomplete}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.handleSearch}
            onSuggestionsClearRequested={this.handleClear}
            onSuggestionSelected={this.handleSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <div className={Styles.searchIcon}>{search}</div>
        </div>
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.Search,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: ISearchParams) => dispatch(loadData(params)),
    onClearSuggestions: () => dispatch(clearSuggestions()),
  }),
)(withRouter(HeaderSearch));
