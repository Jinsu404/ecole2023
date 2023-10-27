import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('653baabe1f4141380e57'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
