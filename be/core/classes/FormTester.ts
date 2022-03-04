export class FormTester {
  async test() {
    const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    await delay(3000)
    return { "t" : "123" }
  }
}