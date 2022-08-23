export type adressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}


export type contactType = {
    name: string,
    email: string,
    address: adressType,
}

export type postType = {
    title: string,
    body: string
}