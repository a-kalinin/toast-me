```js
const { Provider } = require('react-redux');
const configureStore = require('../../store/configureStore').default;
const { store } = configureStore({ app: { counter: 5, first: false } });
<Provider store={store}>
  <App />
</Provider>
```