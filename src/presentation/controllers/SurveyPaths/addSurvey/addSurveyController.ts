import { AddSurvey } from '@domain/contracts/addSurvey'
import { badRequest, noContent, serverError } from '@presentation/helpers/http/httpHelper'
import { HttpRequest, HttpResponse, ProtocolControllers } from '@presentation/protocol'
import { IValidation } from '@presentation/protocol/validation'

export class AddSurveyController implements ProtocolControllers {
  constructor (
    private validation: IValidation,
    private addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { question, answers } = httpRequest.body

    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      await this.addSurvey.add({
        question: question,
        answers: answers
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
