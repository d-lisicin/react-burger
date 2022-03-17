export const checkResponse = (res: { ok: boolean, json: () => any }) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Something went wrong')
    }
}
