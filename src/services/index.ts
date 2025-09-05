export const createHandlers = (serviceName: string) => ({
  succeed: async (res: Response) => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const data = await res.json()

    return data
  },
  failed: async (err: unknown) => {
    if (err instanceof Error) {
      console.error(`[service: ${serviceName}] ${err.message}`)
    } else {
      console.error(`[service: ${serviceName}] Unknown error`)
    }

    throw new Error(`[service: ${serviceName}] Request failed`)
  }
})
