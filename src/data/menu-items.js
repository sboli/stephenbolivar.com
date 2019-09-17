import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Portfolio from '../components/Portfolio';

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
        component: Skills
    },
    {
        id: 'experiences',
        title: 'Expériences',
        component: Experiences
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        component: Portfolio
    }
];

export default items;
