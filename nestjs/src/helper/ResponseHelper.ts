import { HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseResponse } from 'src/BaseResponse';

export class ResponseHelper {
  public ResponseOK(data: Object, message: string, res: Response): Response {

    const response = new BaseResponse();
    response.status= true;
    response.data = data;
    response.message = message;

    return res.status(HttpStatus.OK).json(response);
  }

  public ResponseCreated(data: Object = null, message: string = null, res: Response): Response {

    const response = new BaseResponse();
    response.status= true;
    response.data = data;
    response.message = message;

    return res.status(HttpStatus.CREATED).json(response);
  }


}
