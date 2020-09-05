import { ILoggingConfig } from './config/i-logging-config';
import { IErrorHandingConfig } from './config/i-error-handling-config';
import { ILogglyConfig } from './config/i-loggly-config';
import { IWebConfig } from './config/i-web-config';
import { IContentfulConfig } from './config/i-contentful-config';
import { IFirebaseConfig } from './config/firebase-config';

export interface IConfiguration {
  contentful: IContentfulConfig;
  errorHandlingConfig: IErrorHandingConfig;
  firebaseConfig: IFirebaseConfig;
  loggingConfig: ILoggingConfig;
  logglyConfig: ILogglyConfig;
  webConfig: IWebConfig;
}
