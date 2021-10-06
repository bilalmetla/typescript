

export enum AccessRules { 
    CREATE,
    READ,
    UPDATE,
    DELETE
}

export interface Account{
    username: string,
    password: string
}

export interface SessionToken {
    tokenId: string;
}

export interface TokenGenerator {
    generateToken(account: Account): Promise<SessionToken | undefined>
}

export interface ResponseMessage {
    message: string;
}

export interface UserCredientials extends Account {

    accessRights : AccessRules[]
}