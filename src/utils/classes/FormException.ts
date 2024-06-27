export class FormException extends Error {
  statusCode: number;
  name: string;
  constructor(params: { message: string; statusCode: number; name: string }) {
    super(params.message);
    this.statusCode = params.statusCode;
    this.name = params.name;
  }
}
