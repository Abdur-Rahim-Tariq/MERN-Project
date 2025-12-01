// utils/ApiResponse.js

class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = true;
  }
}

export default ApiResponse;
