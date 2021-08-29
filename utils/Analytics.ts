import ReactGA from 'react-ga';

const GA = process.env.NEXT_PUBLIC_GA || '';

export const initGA = () => {
 console.log('GA init')
 ReactGA.initialize(GA)
}

export const logSection = (section: string) => {
 ReactGA.set({ page: section })
 ReactGA.pageview(section)

}

export const logEvent = (category: string, action: string) => {
 if (category && action) {
    ReactGA.event({ category, action })
 }
}

export const logException = (description = '', fatal = false) => {
 if (description) {
   ReactGA.exception({ description, fatal })
 }
}