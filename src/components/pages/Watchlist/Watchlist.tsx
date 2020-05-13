import React, { Component } from 'react';
import { Layout, Container } from '../../containers';
import Styles from './Watchlist.module.scss';
import { TabItem } from '../../presentationals';
import cx from 'classnames';
import Empty from '../../presentationals/Empty/Empty';
import { heart, check } from '../../../assets/icons';

class Watchlist extends Component {
  state = {
    selectedIndex: 0
  }

  handleTabTitlClick = (selectedIndex: number) => {
    this.setState({
      selectedIndex
    });
  };

  render() {
    const { selectedIndex } = this.state;
    const tabTitles = [
      { id: 0, title: 'My Watchlist' },
      { id: 1, title: 'Already Watched' }
    ];

    return (
      <Layout>
        <div className={Styles.wrapper}>
          <Container>
            <div className={Styles.content}>
              <ul className={Styles.tabTitles}>
                {tabTitles.map((item) => {
                  const tabTitle = cx({
                    [Styles.tabTitle]: true,
                    [Styles.tabTitleCurrent]: item.id === selectedIndex,
                  });

                  return <li key={item.id} className={tabTitle} onClick={() => this.handleTabTitlClick(item.id)}>{item.title}</li>;
                })}
              </ul>
              <div className={Styles.tabs}>
                {selectedIndex === 0 &&
                  <TabItem>
                    <Empty>
                      <p className={Styles.text}>You currently have no movies or TV shows in your watchlist.</p>
                      <p className={Styles.text}>You can easily add items to your watchlist by clicking<br />the <span className={Styles.icon}>{heart}</span> icon on any item in your recommended lists.</p>
                    </Empty>
                  </TabItem>}
                {selectedIndex === 1 &&
                  <TabItem>
                    <Empty>
                      <p className={Styles.text}>You currently have no movies or TV shows in your Already Watched list.</p>
                      <p className={Styles.text}>You can mark items as watched by clicking the <span className={Styles.icon}>{check}</span> icon<br />on any item in your recommended lists.</p>
                    </Empty>
                  </TabItem>}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Watchlist;
