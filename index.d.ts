export var json: Briskly;

/** Expected location of briskly.json */
export var path: string;

export interface Briskly {
    /** 
     * Web server port number
     * Defaults to 2189
     **/
    port?: number;
    
    /** 
     * Web server host name
     * Defaults to 'localhost'
     */
    host?: string;
    
    routes?: {
        [routePath: string]: Route;
    }
    
    components?: {
        [index: string]: Component;
    }
    
    /** Path to entry .html */
    main?: string;
}

export interface Component {
    template: string;
    viewModel: string;
}

export interface Route {
    method: string;
    handler: string;
    path?: string;
    aliases?: string[];
}

export interface Include {
    root: string;
    files: string[];
}