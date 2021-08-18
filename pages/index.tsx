import Contact from '../components/Contact';
import Home from '../components/Home';
import Footer from '../components/Layout/Footer';
import Services from '../components/Services';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Rates from '../components/Rates';

const HomePage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Home />
      <Services translate={t} />
      <Contact />
      <Rates translate={t} />
      <Footer />
    </>
  )
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default HomePage;
