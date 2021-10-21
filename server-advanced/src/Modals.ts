

export enum Tables{
    USERS = 'users',
    CREDIENTIALS = 'userCredientials',
    TOKENS = 'sessionToken',
}

export enum AccessRules { 
    CREATE,
    READ,
    UPDATE,
    DELETE
}

export enum HTTP_CODES {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404
}

export enum HTTP_METHODS{
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
}

export interface Account{
    username: string,
    password: string
}

export interface SessionToken {
    tokenId: string;
    username: string;
    isValid: boolean;
    expirationDate: Date;
    accessRights: AccessRules[]
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

export interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    workingPosition: WorkingPosition
}

export enum WorkingPosition{
    JUINIOR,
    PROGRAMMER,
    ENGINEER,
    EXPERT,
    MANAGER,
}