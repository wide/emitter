import './polyfill/custom-event'


/**
 * Global prefix
 */
const PREFIX = '@'


/**
 * Listen global event
 * @param {String} event
 * @param {Function} fn
 * @param {Object} opts
 * @return {Function}
 */
export function on(event, fn, opts = {}) {
  const ref = e => fn(...e.detail)
  document.addEventListener(`${PREFIX}${event}`, ref, opts)
  return { ref, opts }
}


/**
 * Trigger global event
 * @param {String} event
 * @param {*} args
 * @return {Boolean}
 */
export function emit(event, ...args) {
  const e = new CustomEvent(`${PREFIX}${event}`, { detail: args })
  return document.dispatchEvent(e)
}


/**
 * Remove listener
 * @param {String} event 
 * @param {Function} ref 
 */
export function off(event, ref, opts = {}) {
  document.removeEventListener(`${PREFIX}${event}`, ref, opts)
}


/**
 * Expose emit() in document
 */
document.onEvent = on
document.emitEvent = emit


/**
 * Export all
 */
export default { on, emit, off }