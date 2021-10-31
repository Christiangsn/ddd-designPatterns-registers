import { IServerError } from '../errors'
import { HttpResponse } from '../protocol/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new IServerError()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})