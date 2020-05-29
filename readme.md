# Event Emitter

Offer a simple yet useful way of communication between components.


## Install

```
npm install @wide/emitter --save
```


## Listen events

```js
import emitter from '@wide/emitter'

emitter.on('test', (a, b, c) => {})
```

or outside your script (without access to `emitter`)
```js
document.onEvent('test', (1, 2, 3) => {})
```


##3 Listen event once only

```js
import emitter from '@wide/emitter'

emitter.on('test', (a, b, c) => {}, { once: true })
// or
document.onEvent('test', (1, 2, 3) => {}, { once: true })
```


## Emit events

```js
import emitter from '@wide/emitter'

emitter.emit('test', 1, 2, 3)
// or
document.emitEvent('test', 1, 2, 3)
```


## Unlisten event

```js
import emitter from '@wide/emitter'

const ref = emitter.on('test', (a, b, c) => {})

emitter.off(ref)
```


## Behind the scene

This emitter does not re-create an event dispatcher, but instead make use of `document` own event system, for exemple:
```js
emitter.emit('test', 1, 2, 3)
// or
document.emitEvent('test', 1, 2, 3)
```
becomes:
```js
document.dispatchEvent(new CustomEvent('@test', { detail: [1, 2, 3] }))
```


## Authors

- **Aymeric Assier** - [github.com/myeti](https://github.com/myeti)
- **Julien Martins Da Costa** - [github.com/jdacosta](https://github.com/jdacosta)


## License

This project is licensed under the MIT License - see the [licence](licence) file for details