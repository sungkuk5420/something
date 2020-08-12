# something
dating app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### quasar
```
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```



### action call

```
  const thisObj = this;
  const successCb = result => {
    thisObj.sendSuccessMessage("완료");
    thisObj.loading = false;
  };
  const errorCb = () => {
    thisObj.sendErrorMessage("실패");
    thisObj.loading = false;
  };
  thisObj.loading = true;
  thisObj.$store.dispatch(T.ACTION_NAME, {
    data: {
    },
    successCb,
    errorCb
  });
```