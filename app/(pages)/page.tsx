import classes from './page.module.css'
import theme from './../theme.module.css'
import getPayloadClient from '../../payload/payloadClient';
import { Reference } from '../../payload-types';
import References from '@/components/references';
import Contact from '@/components/contact';

export const revalidate = 10 //  👈🏽 revalidate every 10s

export default async function Home() {
  
  let references: Reference[] = [];
  const payload = await getPayloadClient();
  references = (await payload.find({
    collection: 'references',
  })).docs;

  return (
    <main className={classes.main}>
      <div className={classes.landing}>
        <div className={classes.logo}>
            <div className={classes.symbol}>🌊</div>
            <span className={theme.wavy}>wave.computer</span>
        </div>
      </div>
      <References references={references} />
      <Contact />
    </main>
  )
}
