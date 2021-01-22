import React from 'react';

import listStyles from '../lists.module.scss';
import fonts from '../../../styles/font.module.scss';
import styles from './edit-list.module.scss';

const ListCell = ({ list, handle }) => {
  return (
    <div className={listStyles.container}>
      <div className={listStyles.outer}>
        <div className={styles.inner}>
          <div>{handle}</div>

          <span className={fonts.type15}>{list.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ListCell;
