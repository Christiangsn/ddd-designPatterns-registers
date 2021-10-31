import { IServerError } from '../errors/serverError'
import { HttpResponse } from '../protocol/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new IServerError()
})
