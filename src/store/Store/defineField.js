function definePropInStore(context, field) {
  Object.defineProperty(context, field, {
    configurable: true,
    enumerable: true,
    set(value) {
      context.setState({
        [field]: value,
      });
    },
    get() {
      return context.getState()[field];
    },
  });
}

export { definePropInStore };
