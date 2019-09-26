const storage = {
  set: function(key, value, ms) {
    const _ms = ms || 30 * 24 * 60 * 60 * 1000 // 默认缓存30天
    const data = {
      value: value,
      expires_at: new Date().getTime() + _ms / 1
    }
    localStorage.setItem(key.toString(), JSON.stringify(data))
  },
  get: function(key) {
    var data = JSON.parse(localStorage.getItem(key.toString()))
    if (data !== null) {
      if (data.expires_at !== null && data.expires_at < new Date().getTime()) {
        localStorage.removeItem(key.toString())
      } else {
        return data.value
      }
    }
    return null
  },
  remove: function(key) {
    localStorage.removeItem(key.toString())
  },
  clear: function() {
    localStorage.clear()
  }
}

export default storage