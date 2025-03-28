export interface IDataToast {
  message: string;
  duration: number;
  type: TypeMessageToast;
}

export enum TypeMessageToast {
  SUCCESS = 'success',
  ERROR = 'error',
}
