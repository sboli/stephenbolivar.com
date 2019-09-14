import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

const items = [
    {
        id: 'home',
        title: 'Accueil',
        component: Home
    },
    {
        id: 'about',
        title: 'À propos',
        component: About
    },
    {
        id: 'skills',
        title: 'Compétences',
        component: 'Skills'
    },
    {
        id: 'experiences',
        title: 'Expériences'
    },
    {
        id: 'portfolio',
        title: 'Portfolio'
    }
];

export default items;
