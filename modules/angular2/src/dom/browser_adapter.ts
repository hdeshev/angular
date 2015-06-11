import {List, MapWrapper, ListWrapper} from 'angular2/src/facade/collection';
import {isBlank, isPresent, global} from 'angular2/src/facade/lang';
import {setRootDomAdapter} from './dom_adapter';
import {GenericBrowserDomAdapter} from './generic_browser_adapter';

var _attrToPropMap = {'innerHtml': 'innerHTML', 'readonly': 'readOnly', 'tabindex': 'tabIndex'};

export class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() { setRootDomAdapter(new BrowserDomAdapter()); }
}

// based on urlUtils.js in AngularJS 1
var urlParsingNode = null;
function relativePath(url) {
  if (isBlank(urlParsingNode)) {
    urlParsingNode = document.createElement("a");
  }
  urlParsingNode.setAttribute('href', url);
  return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
                                                       '/' + urlParsingNode.pathname;
}
