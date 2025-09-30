import { plainToInstance } from 'class-transformer'
import { validate, ValidationError } from 'class-validator'
import { NextFunction, Request, Response } from 'express'

export const validateDto = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const classInstanceBody = plainToInstance(dto, req.body)
    const validateDto: ValidationError[] = await validate(classInstanceBody)

    if (validateDto.length > 0) {
      const formattedErrors = validateDto.map(error => ({
        property: error.property,
        constraints: error.constraints,
        children: error.children
      }))

      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: formattedErrors
      })
    }

    req.body = classInstanceBody
    next()
  }
}
