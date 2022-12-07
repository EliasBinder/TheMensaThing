// @ts-ignore //TODO: fix this
import {AzureInstance} from '@shedaltd/react-native-azure-ad-2';

const AZURE_CREDENTIALS = {
    client_id: '6d082866-1528-4b93-a663-04de0d1e7b45',
    client_secret: '5029e8f0-cc4e-49b5-8417-d93e1f665a12',
    redirect_uri: 'https://login.microsoftonline.com/common/oauth2/nativeclient',
    scope: 'User.ReadBasic.All Mail.Read offline_access'
}

export const AZURE_INSTANCE = new AzureInstance(AZURE_CREDENTIALS);

