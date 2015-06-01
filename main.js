/* ---------------------------- *\
 	Common/Useful JS Functions
\* ---------------------------- */
// Reusable Functions
 
// Debugging
function _log(text, error) {
    if(config.debug && window.console) {
        console[(error ? "error" : "log")](text);
    }
}

// Replace all
function _replaceAll(string, find, replace) {
    return string.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), replace);
}

// Remove an element
function _remove(element) {
    element.parentNode.removeChild(element);
}

// Prepend child
function _prependChild(parent, element) {
    parent.insertBefore(element, parent.firstChild);
}

// Set attributes
function _setAttributes(element, attributes) {
    for(var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Toggle class on an element
function _toggleClass(element, name, state) {
    if(element){
        if(element.classList) {
            element.classList[state ? "add" : "remove"](name);
        }
        else {
            var className = (" " + element.className + " ").replace(/\s+/g, " ").replace(" " + name + " ", "");
            element.className = className + (state ? " " + name : "");
        }
    }
}

// Trigger event
function _triggerEvent(element, event) {
    // Create faux event
    var fauxEvent = document.createEvent("MouseEvents");

    // Set the event type
    fauxEvent.initEvent(event, true, true);

    // Dispatch the event
    element.dispatchEvent(fauxEvent);
}

// Deep extend/merge two Objects
// http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
// Removed call to arguments.callee (used explicit function name instead)
function _extend(destination, source) {
    for (var property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            _extend(destination[property], source[property]);
        } 
        else {
            destination[property] = source[property];
        }
    }
    return destination;
}

// Find all elements
function _getElements(selector) {
    return document.querySelectorAll(selector);
}

// Find a single element
function _getElement(selector) {
    return _getElements(selector)[0];
}