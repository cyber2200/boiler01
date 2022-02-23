export class CoreResponse {
    responseText: string = 'NOK'
    responseData: object = {}

    setResponseText(text: string) {
        this.responseText = text
    }

    setResponseData(data: object) {
        this.responseData = data
    }

    getResponse(): object {
        return {res: this.responseText, data: this.responseData}
    }
}