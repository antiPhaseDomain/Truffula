# 🤫

_Now the template for [Panopticon](https://github.com/antiPhaseDomain/Panopticon)!_

## Silence Quickstart

```html
<json-{key}></json-{key}>
```
Where `key` is the desired key name from the set json object.

## Quick Start

```html

<!-- JSON Object 

{ 
  foo: "bar", 
  biz: { 
    baz: "boom", 
    ka: "blooie" 
  } 
}

-->


<h1><json-foo></json-foo>!</h1>
<!-- HTML DOM : <h1><json-foo>bar</json-foo></h1> -->

<json-biz>
  <ul>
    <li><biz-baz></biz-baz></li>
    <li><biz-ka></biz-ka></li>
  <ul>
</json-biz>

<!-- HTML DOM:
<json-biz>
  <ul>
    <li><biz-baz>boom</biz-baz></li>
    <li><biz-ka>blooie</biz-ka></li>
  <ul>
</json-biz>
-->
```

Use [main.js](https://github.com/antiPhaseDomain/Silence/blob/master/assets/scripts/main.js) as if it were the main module file. 

## Setting the JSON

In [main.js](https://github.com/antiPhaseDomain/Silence/blob/master/assets/scripts/main.js) on line [14](https://github.com/antiPhaseDomain/Silence/blob/master/assets/scripts/main.js#L14) is where [fetch](https://css-tricks.com/using-fetch/) is getting it's JSON from.



