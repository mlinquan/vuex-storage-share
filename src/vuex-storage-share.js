const StoragePluginCache = {}

const vuexStorageShare = function(storagePrefix, options) {
  if (typeof options !== 'object') {
    options = {}
  }
  if (typeof storagePrefix === 'object') {
    options = Object.assign(storagePrefix, options)
  }
  if (typeof storagePrefix === 'string') {
    options.storagePrefix = storagePrefix
  }
  options = Object.assign(
    {
      expires_in: 3600,
      storagePrefix: 'VUEX_STORAGE/',
      predicate: () => {
        return true
      }
    },
    options
  )
  if(!StoragePluginCache[options.storagePrefix]) {
  	StoragePluginCache[options.storagePrefix] = new StoragePlugin(options)
  }
  return StoragePluginCache[options.storagePrefix]
}

const StoragePlugin = function(options) {
  this.initStatus = false
  this.storagePrefix = options.storagePrefix
  this.expires_in = options.expires_in
  this.uniqueId = `${Date.now()}-${Math.random()}`

  if (Array.isArray(options.predicate)) {
    const predicate = options.predicate
    if (predicate.length) {
      options.predicate = (mutation) => {
        return predicate.includes(mutation.type)
      }
    }
    if (!predicate.length) {
      options.predicate = (mutation) => {
        return true
      }
    }
  }

  let in_progress = false

  this.subscriber = store => {
    if(!this.initStatus) {
      const storageHandler = (e) => {
        console.log(e)
        if (!e.key || !this.initStatus || e.key.indexOf(this.storagePrefix) !== 0) {
          return
        }

        let newValue = e.newValue
        let type = null
        let payload = null

        try {
          newValue = JSON.parse(newValue)
          payload = newValue.payload
          type = newValue.type
        } catch (e) {
          // console.log(e)
        }

        const uniqueId = newValue && newValue.uniqueId

        if(uniqueId === this.uniqueId) {
          return
        }

        if (!type) {
          return
        }

        if (typeof options.storageListener === 'function') {
          options.storageListener.call(this, {
            type,
            payload
          })
        }
        try {
          in_progress = true
          store.commit(type, payload)
        } finally {
          in_progress = false
        }
      }

      window.addEventListener('storage', storageHandler, false)
    }
    // 从 localStorage 获取 state 进行初始化
    Object.keys(window.localStorage).forEach(key => {
      if (key.indexOf(this.storagePrefix) !== 0) {
        return
      }
      key = key.substring(this.storagePrefix.length)
      if (!options.predicate({
        type: key
      })) {
        return
      }
      const mutation = this.get(key)
      try {
        store.commit(mutation.type, mutation.payload)
      } catch (e) {
        // console.log(e)
      }
    })
    this.initStatus = true
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
      // 每次 mutation 之后调用
      // mutation 的格式为 { type, payload }
      if(in_progress) {
        return
      }
      if (options.predicate(mutation, state)) {
        this.set(mutation.type, mutation.payload)
      }
    })
  }
}

StoragePlugin.prototype.set = function(key, data) {
  const storeKey = this.storagePrefix + key
  try {
    data = JSON.stringify({
      type: key,
      payload: data,
      uniqueId: this.uniqueId
    })
  } catch (e) {
    // console.log(e)
  }
  window.localStorage.setItem(storeKey, data)
}

StoragePlugin.prototype.get = function(key) {
  key = this.storagePrefix + key
  let data = window.localStorage.getItem(key)
  try {
    data = JSON.parse(data)
  } catch (e) {
    // console.log(e)
  }
  return data
}

StoragePlugin.prototype.remove = function(key) {
  key = this.storagePrefix + key
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    // console.log(e)
  }
}

StoragePlugin.prototype.clear = function() {
  Object.keys(window.localStorage).forEach(key => {
    if (key.indexOf(this.storagePrefix) !== 0) {
      return
    }
    key = key.substring(this.storagePrefix.length)
    this.remove(key)
  })
}

export default vuexStorageShare