
/**
 * Replace CustomEvent object on ie<=11
 */
if(typeof CustomEvent !== 'function') {
  function _CustomEvent(name, params) {
    const e = document.createEvent('CustomEvent')
    e.initCustomEvent(name, params.bubbles, params.cancelable, params.detail)
    return e
  }
  _CustomEvent.prototype = window.Event.prototype
  window.CustomEvent = _CustomEvent
}


/**
 * Export as module
 */
export default window.CustomEvent