let Cytoscape = require('cytoscape');
let defaultsDeep = require('lodash.defaultsdeep');

let sbgnStyleSheet = require('./sbgnStyle/graph');

let defaultOptions = {
  boxSelectionEnabled: true,
  showOverlay: false,
  minZoom: false,
  maxZoom: false,
  motionBlur: false,
  wheelSensitivity: 0.1
};

class SBGNRenderer extends Cytoscape {
  constructor( options ){
    options = defaultsDeep( {}, defaultOptions, options );

    if( !options.style ){
      options.style = sbgnStyleSheet(Cytoscape);
    }

    super( defaultsDeep( {}, defaultOptions, options ) );
  }
//   TODO: Initial sbgn-renderer api
//   sbgn (kdfkd) { // the function that can possibly turned into an extension
//   ...; // style sheet can be set in here
//   ...; // accept sbngml file or string, promise to resolve to string (fetch support), possibly always treat it as a promise
//   ...; // export  to sbgnml file or picture
//  }
}

SBGNRenderer.stylesheet = function(){
  return sbgnStyleSheet(Cytoscape);
};

module.exports = SBGNRenderer;
