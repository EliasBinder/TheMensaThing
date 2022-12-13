// @ts-ignore //TODO: fix this
import {AzureInstance} from '../TheMensaThingAzureLogin/lib/index';

const AZURE_CREDENTIALS = {
    tenant_id: '92513267-03e3-401a-80d4-c58ed6674e3b',
    client_id: '9ad3f70e-413d-424e-85f3-1b463ba702f8',
    scope: 'https://scientificnet.onmicrosoft.com/CockpitMobileTest/user_impersonation'
}

export const AZURE_INSTANCE = new AzureInstance(AZURE_CREDENTIALS);

