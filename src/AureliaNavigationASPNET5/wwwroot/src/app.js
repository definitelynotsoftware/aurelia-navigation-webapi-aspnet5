export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}

//import { inject } from 'aurelia-framework';
//import { HttpClientExtensions } from 'core/CoreHelpers'
//import { Router, RouterConfiguration } from 'aurelia-router';

//@inject(HttpClientExtensions)
//export class App {
//    router: Router;
//    httpExtensions: HttpClientExtensions = null;

//    constructor(httpExtensions: HttpClientExtensions) {
//        this.httpExtensions = httpExtensions;
//    }

//    configureRouter(config: RouterConfiguration, router: Router) {        
//        config.title = 'Aurelia';
//        config.map([
//            { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
//            { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' },
//            { route: 'child-router', name: 'childRouter', moduleId: './child-router', nav: true, title: 'Child Router' },         
//            { route: 'login', moduleId: './core/components/login/login'}        
//        ]);

//        this.router = router;
//    }

//    activate() {        
//        this.httpExtensions.configure();
//    }
//}