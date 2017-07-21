# pozition.js

> Geolocation Position. Plus Promise.

Yes. The Geolocation API is so simple, and you need to answer yourself: Do I really need that?

My motivations to create that lib are: learn TypeScript and develop a simple Geolocation "adapter" using promises instead of callbacks.


# Demo

* Getting your current position: https://cezarlz.github.io/pozition.js/

# Install

npm
```
npm install pozition.js --save
```

yarn
```
yarn add pozition.js
```

cdn
```
<script src="https://cdn.rawgit.com/cezarlz/pozition.js/ac4d0d20/dist/pozition.min.js"></script>
```

# Example

```javascript
pozition.current()
  .then(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.speed);
  })
  .catch(err => {
    console.log(err.code);
    console.log(err.message);
  });
```

You can pass options as well:

```javascript
const options = {
  enableHighAccuracy: true,
  timeout: 30
};

pozition.current(options)
  .then(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.speed);
  })
  .catch(err => {
    console.log(err.code);
    console.log(err.message);
  });
```

# API

### pozition.current(options: PositionOptions)

Gets the current position returning a object with the user's coordinates.

MDN says: Determines the device's current location and gives back a Position object with the data.

Result:

```
interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}
```

### pozition.watch(options: PositionOptions)

Gets the current position and still watching the position returning a object with the user's coordinates every time user moves.

MDN says: Returns a long value representing the newly established callback function to be invoked whenever the device location changes.

Result:

```
interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}
```

### pozition.clear(id)

Removes the particular handler previously installed using `watch()`.

### PositionOptions interface

You can pass as options to the methods the following parameters:

```
interface PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
}
```

# Async & Await

Yes, we can use it, take a look:

```javascript
const getUserPosition = async function () {
  const { coords } = await pozition.current();

  console.log(coords);

  return coords;
}
```

JS is awesome!

---

Another lib made with :heart:
