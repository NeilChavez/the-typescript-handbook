(() => {
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id: string): void
    }
    interface Address {
        id: number;
        zip: string;
        city: string
    }


    const client: Client = {
        name: "Neil",
        age: 25,
        address: {
            id: 125,
            zip: "ZVB YUI",
            city: "Paris"
        },
        getFullAddress(id: string) {
            return `${this.address.zip}`
        }
    }

    const me: Client = {
        name: "Me",
        age: 26,
        address: {
            id: 234,
            city: "Madrid",
            zip: "UHG YgI",
        },
        getFullAddress(id: string) {
            return `${this.address.zip}`
        }

    }





})()