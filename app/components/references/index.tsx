import React from 'react';
import classes from './index.module.css';
import theme from '../../theme.module.css';
import { Reference } from '../../../payload-types';
import { Media } from '../Media';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  references: Reference[];
}

export const References: React.FC<Props> = (props) => {
  const { references } = props;
  return (
    <div className={classes.container} {...props}>
    <h2 className={classes.title}>References</h2>
      <div className={classes.list}>
        { references.map((item) => {
          return (
            <div key={item.id} className={classes.item}>
              <Media
                resource={item.screenshot}
              />
              <div className={classes.description}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}
  
export default References;
    