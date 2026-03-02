class RootError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
export { RootError };
//# sourceMappingURL=RootError.error.js.map
