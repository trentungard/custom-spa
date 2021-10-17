import { Dashboard } from "./views/Dashboard.js";
import { Pictures } from "./views/Pictures.js";
import { Profiles } from './views/Profile.js';
const html = Dashboard();
console.log('Dashboard', html)

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: () => Dashboard() },
        { path: '/pictures', view: () => Pictures() },
        { path: '/profiles', view: () => Profiles() }
    ]

    const matches = routes.map( route => {
        return { 
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = matches.find( match => match.isMatch )
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    
    const view = match.route.view();
    console.log('View', view)

    document.querySelector("#app").innerHTML = view;
    console.log(matches, match)
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        console.log(e)
        if (e.target.matches("[data-nav]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router()
})

window.addEventListener('popstate', router)