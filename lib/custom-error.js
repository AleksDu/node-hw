class CustomError extends Error {
  constructor(status, messsage, name = "CustomError") {
    super();
    this.status = status;
    this.message = messsage;
    this.name = name;
  }
}

export { CustomError };
