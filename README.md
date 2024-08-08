# Demonstrating React 19 interoperation with Shadow DOM

```
npm start
```

### example
http://localhost:8080


### live demo 1
http://localhost:8080/blank.html

```javascript
await import('./demo/demo-badge.js')

await import('https://unpkg.com/@github/relative-time-element@4.4.2/dist/bundle.js')

const badge = document.createElement('demo-badge')
document.body.appendChild(badge)

const foo = document.createElement('relative-time')
foo.datetime = new Date().toISOString()
badge.appendChild(foo)

const icon = document.createElement('span')
icon.setAttribute('slot', 'icon')
icon.textContent = '🕒'
badge.appendChild(icon)
```

### live demo 2
http://localhost:8080/blank.html

```javascript

document.body.appendChild(document.createElement('hr'))

await import('https://import.dog/markdown-renderer/markdown-renderer.js')

const mark = document.createElement('markdown-renderer')
mark.markdown = '## Hello World!'
document.body.appendChild(mark)

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

mark.html = true
mark.markdown = `
## Hello [Netflix](https://netflix.com)!

Did you know that Markdown renders HTML content? Check it out:

<demo-badge color="Purple">
  <relative-time datetime="${tomorrow.toISOString()}"></relative-time>
</demo-badge>

<markdown-renderer markdown="*Yo dawg.*"></markdown-renderer>
`
```

### tech notes - [import attributes](https://github.com/tc39/proposal-import-attributes)

* Vite does not support the specification - it prefers to strip the syntax [ref](https://github.com/vitejs/vite/blob/3af02bde7e7f26889d5c0eb300219c43ed1293ad/packages/vite/src/node/plugins/importAnalysis.ts#L494-L497)
* Rollup does support the specification [ref](https://github.com/rollup/rollup/pull/4646)
* Typescript does support the specification [ref](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-3.html#import-attributes)
* ESLint will support the specification once it reaches Stage 4 (currently Stage 3 as of August 2024)
