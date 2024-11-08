## Blog-3
## 2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.



## Asynchronous Programming


Asynchronous code allows JavaScript to handle tasks that take time to complete (such as network requests or file reading)
without blocking the main thread. Traditionally, we used callbacks or promises to manage asynchronous code, 
but `async/await` has become the preferred method due to its simplicity and synchronous-like syntax.


## async and await

`async:` Declares an asynchronous function that returns a promise.

`await:` Pauses the execution within an async function until the promise is resolved or rejected.


## Promises

```tsx

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

```


## async/await

```tsx
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

displayData();


```