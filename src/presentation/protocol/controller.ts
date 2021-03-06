import { HttpRequest, HttpResponse } from './http'

export interface ProtocolControllers {
    handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
