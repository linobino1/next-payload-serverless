import React from 'react';
import classes from './index.module.css';
import theme from '../../theme.module.css';

export const Contact: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Contact</h2>
      <a className={classes.email} href='mailto:leo@wave.computer'>leo@wave.computer</a>
      <address className={classes.address}>
        <span>Leo Lamprecht</span>
        <span>Waldstraße 12</span>
        <span>10551 Berlin</span>
      </address>
    </div>
  )
}
  
export default Contact;
    