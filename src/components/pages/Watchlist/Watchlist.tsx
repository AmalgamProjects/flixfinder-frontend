import React, { Component } from 'react';
import cx from 'classnames';
import { Layout, Container, MyWatchlist, AlreadyWatched } from '../../containers';
import Styles from './Watchlist.module.scss';
import { TabItem } from '../../presentationals';

class Watchlist extends Component {
  state = {
    selectedIndex: 0,
  }

  handleTabTitlClick = (selectedIndex: number) => {
    this.setState({
      selectedIndex,
    });
  };

  render() {
    const { selectedIndex } = this.state;
    const tabTitles = [
      { id: 0, title: 'My Watchlist' },
      { id: 1, title: 'Already Watched' },
    ];

    return (
      <Layout>
        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.content}>
              <ul className={Styles.tabTitles}>
                {tabTitles.map((item) => {
                  const tabTextClassNames = cx({
                    [Styles.tabText]: true,
                    [Styles.tabTextCurrent]: item.id === selectedIndex,
                  });

                  return (
                    <li
                      key={item.id}
                      className={Styles.tabTitle}
                      onClick={() => this.handleTabTitlClick(item.id)}>
                      <span className={tabTextClassNames}>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
              <div className={Styles.tabs}>
                {selectedIndex === 0 && (
                  <TabItem>
                    <MyWatchlist />
                  </TabItem>
                )}
                {selectedIndex === 1 && (
                  <TabItem>
                    <AlreadyWatched />
                  </TabItem>
                )}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Watchlist;
