# vuex-storage-share
[![npm version](https://badge.fury.io/js/vuex-storage-share.svg)](https://badge.fury.io/js/vuex-storage-share)
[![Gzip Size](http://img.badgesize.io/https://unpkg.com/vuex-storage-share@latest/dist/vuex-storage-share.umd.min.js?compression=gzip&style=flat-square)](https://unpkg.com/vuex-storage-share)
[![Monthly Downloads](https://img.shields.io/npm/dm/vuex-storage-share.svg)](https://www.npmjs.com/package/vuex-storage-share)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

Install

```sh
$ npm install vuex-storage-share --save
# or
$ yarn add vuex-storage-share
```

## Usage

```js

import VuexStorageShare from 'vuex-storage-share'

const storagePlugin = VuexStorageShare({
  storagePrefix: 'VUEX_STORAGE/',
  predicate: ['SET_USER_INFO', 'SET_TOKEN', 'SET_USER_AVATAR'],
  expires_in: 3600, // One hour, it has not yet been realized
  storageListener({ type, payload }) {
    const route = router.app._route
    if (type === 'SET_USER_INFO') {
      if (!(payload && payload.is_login) && route.path !== '/login') {
        router.replace({
          path: '/login',
          query: {
            redirect: route.fullPath
          }
        })
      }
      if ((payload && payload.is_login) && route.path === '/login') {
        router.replace(route.query && route.query.redirect || '/home')
      }
    }
  }
})

const store = new Vuex.Store({
  state: {
    userinfo: {
      is_login: false
    }
  },
  mutations: {
    SET_USER_INFO(state, userinfo) {
      userinfo.is_login = !!userinfo.id
      state.userinfo = userinfo
    }
  },
  modules: {
    app,
    user,
  },
  getters,
  plugins: [
    storagePlugin.subscriber
  ]
})
```

## Options

| Option | Explain | Type | Default | 
| ------ | ------ | ------ | ------ |
| storagePrefix | localStorage key prefix. It is also a unique identification. | `String` | `VUEX_STORAGE/` |
| expires_in | Expiration time in seconds. | `Number` | `0` |
| predicate | List of mutations to store and share. | `Array` | `[]` |
| storageListener | `storageListener({ type, payload }) {}` Whenever the store is persisted, return a mutation object. | `Function` | `-` |

### MIT License

### Copyright &copy; 2021 LinQuan.
