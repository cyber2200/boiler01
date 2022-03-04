class Core {
  getBaseUrl() {
    if (location.port === '3001') {
      return "http://localhost:3000"
    }
    return ""
  }
}

export default Core